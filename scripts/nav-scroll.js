
var header = document.getElementById("nav-content");
var stay = header.offsetTop;

window.onscroll = function() {navScrolling()};

function navScrolling() {
  var scrollTop = document.documentElement.scrollTop;
    header.classList.add("nav-shadow");
    if (window.pageYOffset <= stay) {
      header.classList.remove("nav-shadow");
    } else {
      header.classList.add("nav-shadow");
      if ((scrollTop > 830 && scrollTop < 2230) || scrollTop > 3065 && scrollTop < 4320) {
        header.classList.add("nav-move");
        header.classList.remove("nav-scroll");
      } else {
        header.classList.add("nav-scroll");
        header.classList.remove("nav-move");
      }
    }
}
