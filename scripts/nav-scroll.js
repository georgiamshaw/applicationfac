
var header = document.getElementById("nav-content");
var sticking = header.offsetTop;


window.onscroll = function() {navScrolling()};

function navScrolling() {
  if (window.pageYOffset > sticking) {
    header.classList.add("nav-scroll");
  } else {
    header.classList.remove("nav-scroll");
  }
}
