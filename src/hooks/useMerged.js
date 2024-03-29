import { useMemo } from "react";

export const useMerged = (data, couponMatches) => {
  return useMemo(() => {
    return data.map(eventGroup => {
      const matchesOnDate = couponMatches.filter(match => match.matchFullDate === eventGroup.groupDate);

      if (matchesOnDate.length === 0) {
        return eventGroup;
      }

      const updatedGroupData = eventGroup.groupData.map(event => {
        const match = matchesOnDate.find(match => match.eventId === event.eid);
        if (!match) {
          return event;
        }

        const updatedM = event.m.map(m => {
          if (m.muk !== match.matchMuk.muk) {
            return m;
          }

          const updatedO = m.o.map(o => {
            if (o.ono !== match.matchBet.ono) {
              return o;
            }

            return {
              ...o,
              selected: !o.selected
            };
          });

          return { ...m, o: updatedO };
        });

        return { ...event, m: updatedM };
      });

      return { ...eventGroup, groupData: updatedGroupData };
    });
  }, [data, couponMatches]);
};
