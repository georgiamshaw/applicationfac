// Click on the button to toggle between hiding and showing content

// MENU BUTTON ALREADY DECLARED IN TYPEWRITER.JS

const burger = document.getElementById("burger-container");
const dropDown = document.getElementById("dropDownMenu");

menuButton.addEventListener("click", function(e) {
  menuButton.classList.toggle("change");
  dropDown.classList.toggle("appear");
  console.log('clicked');
}, false);

burger.addEventListener("click", function(e) {
  burger.classList.toggle("change");
  dropDown.classList.toggle("appear");
  console.log('clicked');
}, false);

// Close the dropdown menu if someone clicks outside of it
const minA = window.matchMedia("(min-width: 500px)");

window.onclick = function(event) {
if (minA.matches && !event.target.matches("#menu-button")) {
  console.log("close-menu");
  dropDown.classList.remove("appear");
  }
}
