const months = [
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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadlines = document.querySelectorAll(".deadline-format h4");

const futureDate = new Date(2022, 0, 21, 11, 20, 00);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const mins = futureDate.getMinutes();

giveaway.textContent = `Giveaway Ends on ${day}, ${date} ${month} ${year}, ${hour}:${mins}am`;

function getRemainingDate() {
  const date = new Date().getTime();
  const givewayDate = futureDate.getTime();
  let time = givewayDate - date;

  //1s=1000ms
  // 1min=60s
  // 1hr=60mins
  // 1day=24hrs
  // everything turned into milliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  let days = Math.floor(time / oneDay);
  let hrs = Math.floor((time % oneDay) / oneHr);
  let mins = Math.floor((time % oneHr) / oneMin);
  let secs = Math.floor((time % oneMin) / 1000);
  const dateArray = [days, hrs, mins, secs];
  // function for digits to dislpay the 0 in front of the count ie 09 instead 9
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  // iterate over h4 element
  deadlines.forEach(function (item, index) {
    item.innerHTML = format(dateArray[index]);
  });
  if (time < 0) {
    const deadline = document.querySelector(".deadline");
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Sorry. This giveway has expired!</h4>`;
  }
}
// here time changes dynamically every 1000ms
let countDown = setInterval(getRemainingDate, 1000);
getRemainingDate();
