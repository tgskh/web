function clock () {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let hourDeg = (hour % 12) * 30 + minutes * 0.5;
  let minutesDeg = minutes * 6;
  let secondsDeg = seconds * 6;
  
  (document.getElementsByClassName('hour')[0]).style.transform = `rotate(${hourDeg}deg)`;
  (document.getElementsByClassName('minute')[0]).style.transform = `rotate(${minutesDeg}deg)`;
  (document.getElementsByClassName('second')[0]).style.transform = `rotate(${secondsDeg}deg)`;
}

 setInterval(clock, 1000);

