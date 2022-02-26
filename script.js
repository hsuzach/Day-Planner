//displays and updates the current date
let currentDay = document.getElementById("currentDay")
function displayDate(){
  let today = moment().format('dddd MMM Do, YYYY')
  currentDay.textContent = "Today is " + today
}
setInterval(displayDate(),10000);

//save text content to local storage

document.getElementById("btn9").addEventListener('click', record9)
function record9(){
  let description9 = document.getElementById("dsc9").value;
  localStorage.setItem("9AM",description9)
}
function recall9(){
  document.getElementById("dsc9").innerHTML = localStorage.getItem("9AM")
}
recall9();

document.getElementById("btn10").addEventListener('click', record10)
function record10(){
  let description10 = document.getElementById("dsc10").value;
  localStorage.setItem("10AM",description10)
}
function recall10(){
  document.getElementById("dsc10").innerHTML = localStorage.getItem("10AM")
}
recall10();

document.getElementById("btn11").addEventListener('click', record11)
function record11(){
  let description11 = document.getElementById("dsc11").value;
  localStorage.setItem("11AM",description11)
}
function recall11(){
  document.getElementById("dsc11").innerHTML = localStorage.getItem("11AM")
}
recall11();

document.getElementById("btn12").addEventListener('click', record12)
function record12(){
  let description12 = document.getElementById("dsc12").value;
  localStorage.setItem("12PM",description12)
}
function recall12(){
  document.getElementById("dsc12").innerHTML = localStorage.getItem("12PM")
}
recall12();

document.getElementById("btn1").addEventListener('click', record1)
function record1(){
  let description1 = document.getElementById("dsc1").value;
  localStorage.setItem("1PM",description1)
}
function recall1(){
  document.getElementById("dsc1").innerHTML = localStorage.getItem("1PM")
}
recall1();

document.getElementById("btn2").addEventListener('click', record2)
function record2(){
  let description2 = document.getElementById("dsc2").value;
  localStorage.setItem("2PM",description2)
}
function recall2(){
  document.getElementById("dsc2").innerHTML = localStorage.getItem("2PM")
}
recall2();

document.getElementById("btn3").addEventListener('click', record3)
function record3(){
  let description3 = document.getElementById("dsc3").value;
  localStorage.setItem("3PM",description3)
}
function recall3(){
  document.getElementById("dsc3").innerHTML = localStorage.getItem("3PM")
}
recall3();

document.getElementById("btn4").addEventListener('click', record4)
function record4(){
  let description4 = document.getElementById("dsc4").value;
  localStorage.setItem("4PM",description4)
}
function recall4(){
  document.getElementById("dsc4").innerHTML = localStorage.getItem("4PM")
}
recall4();

document.getElementById("btn5").addEventListener('click', record5)
function record5(){
  let description5 = document.getElementById("dsc5").value;
  localStorage.setItem("5PM",description5)
}
function recall5(){
  document.getElementById("dsc5").innerHTML = localStorage.getItem("5PM")
}
recall5();