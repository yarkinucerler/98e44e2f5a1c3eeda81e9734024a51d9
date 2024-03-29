import monthNames from '../configs/monthNames.json'
export const getDateDifference= (givenDateString) =>  {

  const [datePart, dayPart] = givenDateString.split(", ");
  const [day, monthName, yearPart] = datePart.split(" ");

  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const givenDate = new Date(yearPart, monthNames[monthName], day);

  const diff = givenDate - now;

  const diffDays = Math.round(diff / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Bugün";
  } else if (diffDays === 1) {
    return "Yarın";
  } else if (diffDays === -1) {
    return "Dün";
  } else {
    return `${day} ${monthName}, ${dayPart}`;
  }
}
