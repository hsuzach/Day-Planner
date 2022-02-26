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
  localStorage.setItem("9AM",description9);
  showMessage();
}
function recall9(){
  document.getElementById("dsc9").innerHTML = localStorage.getItem("9AM")
}

document.getElementById("btn10").addEventListener('click', record10)
function record10(){
  let description10 = document.getElementById("dsc10").value;
  localStorage.setItem("10AM",description10);
  showMessage();
}
function recall10(){
  document.getElementById("dsc10").innerHTML = localStorage.getItem("10AM")
}

document.getElementById("btn11").addEventListener('click', record11)
function record11(){
  let description11 = document.getElementById("dsc11").value;
  localStorage.setItem("11AM",description11);
  showMessage();
  
}
function recall11(){
  document.getElementById("dsc11").innerHTML = localStorage.getItem("11AM")
}

document.getElementById("btn12").addEventListener('click', record12)
function record12(){
  let description12 = document.getElementById("dsc12").value;
  localStorage.setItem("12PM",description12);
  showMessage();
}
function recall12(){
  document.getElementById("dsc12").innerHTML = localStorage.getItem("12PM")
}

document.getElementById("btn1").addEventListener('click', record1)
function record1(){
  let description1 = document.getElementById("dsc1").value;
  localStorage.setItem("1PM",description1);
  showMessage();
}
function recall1(){
  document.getElementById("dsc1").innerHTML = localStorage.getItem("1PM")
}

document.getElementById("btn2").addEventListener('click', record2)
function record2(){
  let description2 = document.getElementById("dsc2").value;
  localStorage.setItem("2PM",description2);
  showMessage();
}
function recall2(){
  document.getElementById("dsc2").innerHTML = localStorage.getItem("2PM")
}

document.getElementById("btn3").addEventListener('click', record3)
function record3(){
  let description3 = document.getElementById("dsc3").value;
  localStorage.setItem("3PM",description3);
  showMessage();
}
function recall3(){
  document.getElementById("dsc3").innerHTML = localStorage.getItem("3PM")
}

document.getElementById("btn4").addEventListener('click', record4)
function record4(){
  let description4 = document.getElementById("dsc4").value;
  localStorage.setItem("4PM",description4);
  showMessage();
}
function recall4(){
  document.getElementById("dsc4").innerHTML = localStorage.getItem("4PM")
}

document.getElementById("btn5").addEventListener('click', record5)
function record5(){
  let description5 = document.getElementById("dsc5").value;
  localStorage.setItem("5PM",description5);
  showMessage();
}
function recall5(){
  document.getElementById("dsc5").innerHTML = localStorage.getItem("5PM")
}
recall9();
recall10();
recall11();
recall12();
recall1();
recall2();
recall3();
recall4();
recall5();

//display if a task has been saved for 5 seconds
function showMessage(){
  document.getElementById("message").setAttribute("style","visibility: visible");
  setTimeout(() => {
  document.getElementById("message").setAttribute("style","visibility: hidden");
  }, 5000);
}

//set color of each timeblock
let currentHour = moment().hours();

function colorHour9(){
  if (currentHour === 9){
    $("textarea#dsc9").addClass("present")
  } else if (currentHour > 9){
    $("textarea#dsc9").addClass("past")
    $("textarea#dsc9").removeClass("present")
  } else {
    $("textarea#dsc9").addClass("future")
    $("textarea#dsc9").removeClass("present")
    $("textarea#dsc9").removeClass("past")
  }
}

function colorHour10(){
  if (currentHour === 10){
    $("textarea#dsc10").addClass("present")
  } else if (currentHour > 10){
    $("textarea#dsc10").addClass("past")
    $("textarea#dsc10").removeClass("present")
  } else {
    $("textarea#dsc10").addClass("future")
    $("textarea#dsc10").removeClass("present")
    $("textarea#dsc10").removeClass("past")
  }
}

function colorHour11(){
  if (currentHour === 11){
    $("textarea#dsc11").addClass("present")
  } else if (currentHour > 11){
    $("textarea#dsc11").addClass("past")
    $("textarea#dsc11").removeClass("present")
  } else {
    $("textarea#dsc11").addClass("future")
    $("textarea#dsc11").removeClass("present")
    $("textarea#dsc11").removeClass("past")
  }
}

function colorHour12(){
  if (currentHour === 12){
    $("textarea#dsc12").addClass("present")
  } else if (currentHour > 12){
    $("textarea#dsc12").addClass("past")
    $("textarea#dsc12").removeClass("present")
  } else {
    $("textarea#dsc12").addClass("future")
    $("textarea#dsc12").removeClass("present")
    $("textarea#dsc12").removeClass("past")
  }
}

function colorHour1(){
  if (currentHour === 13){
    $("textarea#dsc1").addClass("present")
  } else if (currentHour > 13){
    $("textarea#dsc1").addClass("past")
    $("textarea#dsc1").removeClass("present")
  } else {
    $("textarea#dsc1").addClass("future")
    $("textarea#dsc1").removeClass("present")
    $("textarea#dsc1").removeClass("past")
  }
}

function colorHour2(){
  if (currentHour === 14){
    $("textarea#dsc2").addClass("present")
  } else if (currentHour > 14){
    $("textarea#dsc2").addClass("past")
    $("textarea#dsc2").removeClass("present")
  } else {
    $("textarea#dsc2").addClass("future")
    $("textarea#dsc2").removeClass("present")
    $("textarea#dsc2").removeClass("past")
  }
}

function colorHour3(){
  if (currentHour === 15){
    $("textarea#dsc3").addClass("present")
  } else if (currentHour > 15){
    $("textarea#dsc3").addClass("past")
    $("textarea#dsc3").removeClass("present")
  } else {
    $("textarea#dsc3").addClass("future")
    $("textarea#dsc3").removeClass("present")
    $("textarea#dsc3").removeClass("past")
  }
}

function colorHour4(){
  if (currentHour === 16){
    $("textarea#dsc4").addClass("present")
  } else if (currentHour > 16){
    $("textarea#dsc4").addClass("past")
    $("textarea#dsc4").removeClass("present")
  } else {
    $("textarea#dsc4").addClass("future")
    $("textarea#dsc4").removeClass("present")
    $("textarea#dsc4").removeClass("past")
  }
}

function colorHour5(){
  if (currentHour === 17){
    $("textarea#dsc5").addClass("present")
  } else if (currentHour > 17){
    $("textarea#dsc5").addClass("past")
    $("textarea#dsc5").removeClass("present")
  } else {
    $("textarea#dsc5").addClass("future")
    $("textarea#dsc5").removeClass("present")
    $("textarea#dsc5").removeClass("past")
  }
}

colorHour9();
colorHour10();
colorHour11();
colorHour12();
colorHour1();
colorHour2();
colorHour3();
colorHour4();
colorHour5();

function checkHour(){
  colorHour9();
  colorHour10();
  colorHour11();
  colorHour12();
  colorHour1();
  colorHour2();
  colorHour3();
  colorHour4();
  colorHour5();
}
setInterval(checkHour, 1000);



