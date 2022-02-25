let currentDay = document.getElementById("currentDay")

function displayDate(){
  var today = moment().format('ddd MMM Do, YYYY')
  currentDay.textContent = "Today is " + today
}

setInterval(displayDate,1000);