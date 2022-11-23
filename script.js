alert("You can input orders by clicking the button at the bottom right hand corner and get notified.")

//Javascript code for the navigation bar
let sidebar = document.querySelector(".nav-bar");
let closeBtn = document.querySelector("#nav-btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  // call function
  changeBtn();
});

function changeBtn() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("fas fa-bars", "fa fa-close");
  } else {
    closeBtn.classList.replace("fa fa-close", "fas fa-bars");
  }
}



//Javascript code to enable dark mode in the dashboard
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}




//Javascript code for the add order pop-up box
document.getElementById("add-button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});




// To add the orders to the dashboard
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var n = 1;
var x = 0;
var data = 0;

function AddRow() {
  var AddRown = document.getElementById("orders");
  var NewRow = AddRown.insertRow(n);

  list1[x] = document.getElementById("pname").value;
  list2[x] = document.getElementById("onumber").value;
  list3[x] = document.getElementById("items").value;
  list4[x] = document.getElementById("amount").value;
  list5[x] = document.getElementById("dates").value;

  var cel1 = NewRow.insertCell(0);
  var cel2 = NewRow.insertCell(1);
  var cel3 = NewRow.insertCell(2);
  var cel4 = NewRow.insertCell(3);
  var cel5 = NewRow.insertCell(4);

  cel1.innerHTML = list1[x];
  cel2.innerHTML = list2[x];
  cel3.innerHTML = list3[x];
  cel4.innerHTML = list4[x];
  cel5.innerHTML = list5[x];

  n++;
  x++;

  // To increment the notification number whenever an order is added.
  data = data + 1;
  confirm("Do you want to add this order?");
  document.getElementById("increase").innerText = data;
}



