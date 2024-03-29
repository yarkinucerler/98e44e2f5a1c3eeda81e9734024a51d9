import {slugify} from "../utils/slug";
import {useMemo} from "react";

const handleSearchText = (arr, searchText) => {
  return arr.map(event => ({
    ...event,
    groupData: event.groupData.length && event.groupData.filter(item => {
      if (slugify(item.en).includes(slugify(searchText))) {
        console.log(slugify(item.en));
        console.log(slugify(searchText));
        return item
      }
    })
  }))
}

const handleSearchDates = (arr, dates) => {
  const selectedDates = dates.filter(date => date.selected).map(date => date.value);
  return selectedDates.length
    ? arr.filter(item => selectedDates.includes(item.groupDate))
    : arr;
}

const handleSearchOneMatch = (arr, filter) => {
  return arr.map(event => ({
    ...event,
    groupData: event.groupData.filter(item => (item.mb === Number(filter)))
  }))
}

const handleSearchKingRatio = (arr) => {
  return arr.map(event => ({
    ...event,
    groupData: event.groupData.filter(item => item.iskbet)
  }))
}

export const useFiltered = (data, filterState) => {

  return useMemo(() => {
    let filteredData = [...data];

    if (filterState.searchText) {
      filteredData = handleSearchText(filteredData, filterState.searchText);
      console.log('filteredData', filteredData);
    }

    const isDateSelected = filterState.dates.some(date => date.selected);
    if (isDateSelected) {
      filteredData = handleSearchDates(filteredData, filterState.dates);
    }

    if (filterState.kingRatio) {
      filteredData = handleSearchKingRatio(filteredData)
    }

    if (filterState.oneMatch) {
      filteredData = handleSearchOneMatch(filteredData, filterState.oneMatch)
    }

    return filteredData;
  }, [data, filterState]);
};