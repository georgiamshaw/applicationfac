// Click on the button to toggle between hiding and showing content
const menuButton = document.getElementById("menu-button");
const burger = document.getElementById("burger-container");
const dropDown = document.getElementById("dropDownMenu");
const dropdowns = document.getElementsByClassName("dropdown-content");


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

//
// // Close the dropdown menu if someone clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches("#dropdownMenu")) {
//     console.log("close-menu");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("appear")) {
//         openDropdown.classList.remove("appear");
//       }
//     }
//   }
// }
