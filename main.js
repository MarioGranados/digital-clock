document.addEventListener("DOMContentLoaded", function () {
  var twentyFourHourFormat = true;

  let time = document.getElementById("time");
  let button = document.getElementById("button")

  button.addEventListener('click', () => {
    if(twentyFourHourFormat) {
      twentyFourHourFormat = false;
      button.innerHTML = 'Switch to Standart 12 Hour Format'
    }
    else {
      twentyFourHourFormat = true;
      button.innerHTML = 'Switch to 24 Hour Format'

    }
  })


  let displayTime = (twentyFourHourFormat) => {
    const start = new Date();

    let hours = start.getHours();
    let minutes = start.getMinutes();
    let seconds = start.getSeconds();
    if (twentyFourHourFormat) {
      time.innerHTML = `${hours}:${minutes}:${seconds}`;
    } else {
      if (hours > 12) {
        hours = hours - 12;
        time.innerHTML = `${hours}:${minutes}:${seconds} PM`;
      } else if (hours == 0) {
        hours = 12;
        time.innerHTML = `${hours}:${minutes}:${seconds} AM`;
      } else {
        time.innerHTML = `${hours}:${minutes}:${seconds} AM`;
      }
    }
  };

  //now we will display the time every second
  setInterval((function(){
      displayTime(twentyFourHourFormat)
  }), 1000);
});
