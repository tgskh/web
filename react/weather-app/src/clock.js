function updateClock () {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let currentDay = now.getDay();
  let currrentDate = now.getDate();
  let currentMonth = now.getMonth();
  let currentYear = now.getFullYear();
  const days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec']
  if (minutes <10) {minutes = `0${minutes}`;};
  if (hours <10) {hours = `0${hours}`;};
  const dayOfWeek = document.getElementById('day');
  dayOfWeek.innerHTML = `${days[currentDay]}, ${currrentDate} ${months[currentMonth]}, ${currentYear}`
}

export default updateClock;
