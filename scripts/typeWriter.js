//Typewriter effect on h1
var i = 0;
var typeWriterH1 = "Georgia Shaw.";
var heading1 = document.getElementById("typeWriterHeading1");
var j = 0;
var typeWriterH2 = "Founders and Coders Application.";
var k = 0;
var heading2 = document.getElementById("typeWriterHeading2");
var typeWriterH3 = "April 2019.";
var heading3 = document.getElementById("typeWriterHeading3");
var speed = 90;
var speed1 = 65;


function typeWriter() {
  if (i < typeWriterH1.length) {
    heading1.innerHTML += typeWriterH1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (i == typeWriterH1.length && j < typeWriterH2.length) {
    heading2.innerHTML += typeWriterH2.charAt(j);
    j++;
    setTimeout(typeWriter, speed1);
  }
  else if (j == typeWriterH2.length && k < typeWriterH3.length) {
    heading3.innerHTML += typeWriterH3.charAt(k);
    k++;
    setTimeout(typeWriter, speed1);
  }
} typeWriter();
