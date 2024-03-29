export const groupByDate = (events) => {
  const arr = []
  const set = new Set()
  events.forEach(event => {
    set.add(event.edgn)
  })

  set.forEach(value => {
    arr.push({
      groupDate: value,
      groupData: events.filter(event => event.edgn === value )
    })
  })
  return arr.sort((a,b) => a.groupDate.slice(0,2) - b.groupDate.slice(0,2))
}