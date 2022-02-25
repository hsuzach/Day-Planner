let currentDay = document.getElementById("currentDay")

function displayDate(){
  var today = moment().format('dddd MMM Do, YYYY')
  currentDay.textContent = "Today is " + today
}

setInterval(displayDate,1000);