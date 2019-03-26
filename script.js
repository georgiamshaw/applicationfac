//Typewriter effect on h1
var i = 0;
var typeWriterH1 = "Georgia Shaw.";
var speed = 110;

function typeWriter() {
  if (i < typeWriterH1.length) {
    document.getElementById("typeWriterHeading1").innerHTML += typeWriterH1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} typeWriter();
