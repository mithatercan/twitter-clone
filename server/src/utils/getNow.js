const getNow = () => {
  const date = new Date();
  const now = date.getHours() + " : " + date.getMinutes();
  return now;
};

export default getNow;
