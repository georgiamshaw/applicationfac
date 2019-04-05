//Typewriter effect on h1
var i = 0;
var typeWriterH1 = "Georgia Shaw.";
var j = 0;
var typeWriterH2 = "Founders and Coders Application.";
var k = 0;
var typeWriterH22 = "April 2019.";
var speed = 90;
var speed1 = 65;

function typeWriter() {
  if (i < typeWriterH1.length) {
    document.getElementById("typeWriterHeading1").innerHTML += typeWriterH1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else if (i == typeWriterH1.length && j < typeWriterH2.length) {
    document.getElementById("typeWriterHeading2").innerHTML += typeWriterH2.charAt(j);
    j++;
    setTimeout(typeWriter, speed1);
  }
  else if (j == typeWriterH2.length && k < typeWriterH22.length) {
    document.getElementById("typeWriterHeading22").innerHTML += typeWriterH22.charAt(k);
    k++;
    setTimeout(typeWriter, speed1);
  }
} typeWriter();
