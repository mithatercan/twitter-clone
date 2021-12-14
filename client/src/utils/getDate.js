const getMonthName = (month) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
};

const getDate = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = getMonthName(dateObj.getMonth());
  return `${month} ${year}`;
};

export default getDate;
