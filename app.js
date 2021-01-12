let time = document.getElementById('time');
let small = document.querySelector('small');
let p = document.querySelector('p');

function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let miniute = date.getMinutes();
  let secends = date.getSeconds();
  let timeFormat = 'AM';

  let day =   date.getDate();
  let months = date.getMonth();
  let year = date.getFullYear();
 

  months = months + 1;

  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    timeFormat = 'PM';
  }

 hours = hours < 10 ? '0' + hours : hours;
 miniute = miniute < 10 ? '0' + miniute : miniute;
 secends = secends < 10 ? '0' + secends : secends;
 day = day < 10 ? '0' + day : day;
 months = months < 10 ? '0' + months : months;
 

  let finalTime = `${hours}: ${miniute}: ${secends}`;
  let finalDate =  `${day}: ${months}: ${year}`;

  time.innerText = finalTime;
  small.innerText = timeFormat;
  p.innerText = finalDate;

  setInterval(digitalClock, 1000);
}
digitalClock();