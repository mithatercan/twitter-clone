const getTweetTime = (createdAt) => {
  const timeDiff = Date.now() - Date.parse(createdAt);
  const timeDiffInMinutes = timeDiff / 1000 / 60;
  const timeDiffInHours = timeDiff / 1000 / 60 / 60;
  const timeDiffInDays = timeDiff / 1000 / 60 / 60 / 24;

  if (timeDiffInMinutes < 1) {
    return "now";
  } else if (timeDiffInMinutes < 60) {
    return `${Math.round(timeDiffInMinutes)}m`;
  } else if (timeDiffInHours < 24) {
    return `${Math.round(timeDiffInHours)}h`;
  } else if (timeDiffInDays < 7) {
    return `${Math.round(timeDiffInDays)}d`;
  } else {
    return `${new Date(createdAt).toLocaleString()}`;
  }
};

export default getTweetTime;
