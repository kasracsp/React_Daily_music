const getChoosenCategory = (chart, key) => {
  const filteredCategory = chart.filter((category) => category.title === key);
  return filteredCategory[0].data;
};

const calcDuration = (data) => {
  const result = data.reduce((total, item) => total + item.duration, 0);
  return result;
};

const setTime = (time) => {
  const minutes = Math.floor(time / 60);
  const hours=Math.floor(minutes/60);
  const countingMinutes=Math.round(((minutes / 60)-hours)*60);

  return (hours>0 && (hours + " " + (hours > 1 ? "hours" : "hour")) + " and " ) + countingMinutes + " " + (countingMinutes > 1 ? "Minutes" : "Minute");
};

export { getChoosenCategory, calcDuration, setTime };
