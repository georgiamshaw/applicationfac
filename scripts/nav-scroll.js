
window.onscroll = function() {navScrolling()};


var header = document.getElementById("nav-content");


var sticking = header.offsetTop;


function navScrolling() {
  if (window.pageYOffset > sticking) {
    header.classList.add("nav-scroll");
  } else {
    header.classList.remove("nav-scroll");
  }
}
