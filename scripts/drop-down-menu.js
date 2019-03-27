// Click on the button to toggle between hiding and showing content
function dropDownFunction() {
  document.getElementById("dropDownMenu").classList.toggle("appear");
}

// Close the dropdown menu if someone clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches(".menu-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("appear")) {
        openDropdown.classList.remove("appear");
      }
    }
  }
}
