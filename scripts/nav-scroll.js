
var header = document.getElementById("nav-content");
var stay = header.offsetTop;
var minC = window.matchMedia("(min-width: 1400px)");

window.onscroll = function() {
  header.classList.add("nav-shadow");
  header.classList.add("nav-scroll");
  if (window.pageYOffset <= stay) {
    header.classList.remove("nav-shadow");
  } else if (minC.matches) {
  navScrolling();
  }
}

function navScrolling() {
  var scrollTop = document.documentElement.scrollTop;
    header.classList.add("nav-shadow");
    if (window.pageYOffset <= stay) {
      header.classList.remove("nav-shadow");
    } else {
      header.classList.add("nav-shadow");
      if ((scrollTop > 830 && scrollTop < 2230) || (scrollTop > 3065 && scrollTop < 4270)) {
        header.classList.add("nav-move");
        header.classList.remove("nav-scroll");
      } else {
        header.classList.add("nav-scroll");
        header.classList.remove("nav-move");
      }
    }
}
