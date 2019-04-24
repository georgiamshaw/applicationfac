
// AUTOPLAY //

const slides = document.querySelectorAll("#image-container .image");
const dots = document.getElementsByClassName("image-dot");
const text = document.getElementsByClassName("image-text");
var currentSlide = 0;
var currentDot = 0;
var currentText = 0;
var imageInterval = setInterval(autoplayImages, 4000);

function autoplayImages() {
    slides[currentSlide].className = "image";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = "image show";
    dots[currentDot].className = "image-dot";
    currentDot = (currentDot + 1) % dots.length;
    dots[currentDot].className = "image-dot active";
    text[currentText].className = "image-text";
    currentText = (currentText + 1) % text.length;
    text[currentText].className = "image-text show";
}

// PLAY AND PAUSE //

const playPauseButton = document.getElementById("play-pause");
var playingImages = true;

function pauseAutoImages() {
  playingImages = false;
  clearInterval(imageInterval);
  console.log("pause images");
}

function playAutoImages() {
  playingImages = true;
  imageInterval = setInterval(nextImage, 4000);
  console.log("play images");
}

playPauseButton.onclick = function() {
  if (playingImages == false) {
    playAutoImages();
  } else {
    pauseAutoImages();
  }
};

// CLICK NEXT AND PREVIOUS SLIDE //

function nextImage() {
  autoplayImages(currentSlide + 1);
}

function prevImage() {
  autoplayImages(currentSlide - 1);
  autoplayImages(currentDot - 1);
}

const next = document.getElementById("next-button-wrap");
const prev = document.getElementById("prev-button-wrap");

next.addEventListener("click", pauseAutoImages);
next.addEventListener("click", nextImage);
prev.addEventListener ("click", pauseAutoImages)
prev.addEventListener ("click", prevImage);

// KEYBOARD NAVIGATION //

document.addEventListener("keydown", function(move) {
  if (move.keyCode == 39) {
    pauseAutoImages();
    nextImage("next-button");
    console.log("right click with key");
  }
  else if (move.keyCode == 37) {
    pauseAutoImages();
    prevImage("prev-button");
    console.log("left click with key");
  }
});


// SHOW IMAGE ACCORDING TO DOT //

const dot1 = document.getElementById("dot-1");
const dot2 = document.getElementById("dot-2");
const dot3 = document.getElementById("dot-3");

dot1.addEventListener("click", pauseAutoImages);
dot1.addEventListener("click", nextImage);
dot2.addEventListener("click", pauseAutoImages);
dot2.addEventListener("click", nextImage);
dot3.addEventListener("click", pauseAutoImages);
dot3.addEventListener("click", nextImage);
