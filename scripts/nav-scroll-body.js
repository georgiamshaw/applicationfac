var header = document.getElementById("nav-content");
window.onscroll = function() {navColourChange()};

function navColourChange() {
  if (document.documentElement.scrollTop > 830 && document.documentElement.scrollTop < 1850) {
    header.classList.add("nav-move");
    header.classList.remove("nav-scroll");
  } else if (document.documentElement.scrollTop > 2650) {
    header.classList.add("nav-move");
    header.classList.remove("nav-scroll");
  } else {
    header.classList.add("nav-scroll");
    header.classList.remove("nav-move");
  }
}
