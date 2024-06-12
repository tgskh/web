const convertTime = (timeStamp) => {
  const myDate = new Date(timeStamp);
  return (`${myDate.getHours()}:${myDate.getMinutes()}`);
}

export default convertTime;



