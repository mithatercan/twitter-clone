const getMonthName = (month) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[month];
};

const getDate = () => {
  const date = new Date();
  const day = date.getDay();
  const year = date.getFullYear();
  const month = date.getMonth();
  return `on ${getMonthName(month)} ${day}, ${year}`;
};

export default getDate;
