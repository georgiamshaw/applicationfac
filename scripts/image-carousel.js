// DECLARATIONS //

const slides = document.querySelectorAll("#image-container .image");
const dots = document.getElementsByClassName("image-dot");
const text = document.getElementsByClassName("image-text");
var currentSlide = 0;
var currentDot = 0;
var currentText = 0;
var imageInterval = setInterval(nextImage, 3000); // AMOUNT OF SECONDS IT STAYS ON EACH IMAGE
const prev = document.querySelector("#prev-button-wrap");
const next = document.querySelector("#next-button-wrap");

// CLICK PREVIOUS SLIDE //

function prevImage() {
  if (currentSlide == 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  document.querySelector(".image.show").classList.remove("show");
  slides[currentSlide].classList.add("show");
  document.querySelector(".image-dot.active").classList.remove("active");
  dots[currentSlide].classList.add("active");
  document.querySelector(".image-text.show").classList.remove("show");
  text[currentSlide].classList.add("show");
}

prev.onclick = function() {
  pauseAutoImages()
  prevImage();
  console.log("previous image");
};

// CLICK NEXT SLIDE //

function nextImage() {
  if (currentSlide == slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  document.querySelector(".image.show").classList.remove("show");
  slides[currentSlide].classList.add("show");
  document.querySelector(".image-dot.active").classList.remove("active");
  dots[currentSlide].classList.add("active");
  document.querySelector(".image-text.show").classList.remove("show");
  text[currentSlide].classList.add("show");
}

next.onclick = function() {
  pauseAutoImages()
  nextImage();
  console.log("next image");
};

// KEYBOARD NAVIGATION //

document.addEventListener("keydown", function(move) {
  if (move.keyCode == 39) {
    pauseAutoImages()
    nextImage("next-button");
    console.log("right click with key");
  }
  else if (move.keyCode == 37) {
    pauseAutoImages()
    prevImage("prev-button");
    console.log("left click with key");
  }
});

// PLAY AND PAUSE //

const playPauseButton = document.getElementById("play-pause");
var playingImages = true;

function pauseAutoImages() {
  playingImages = false; // IF IMAGES ARE NOT PLAYING
  clearInterval(imageInterval);
  play.style.display = "block";
  pause.style.display = "none"; // REMOVE AUTOPLAY
  console.log("pause images");
}

function playAutoImages() {
  playingImages = true; // IF IMAGES ARE PLAYING
  imageInterval = setInterval(nextImage, 3000); // KEEP AUTOPLAY
  console.log("play images");
}

// IF IMAGES ARE NOT PLAYING, START THEM, AND IF THEY ARE, PAUSE THEM //
playPauseButton.onclick = function() {
  if (playingImages == false) {
    playAutoImages();
  } else {
    pauseAutoImages();
  }
};

const play = document.getElementById("play-button");
const pause = document.getElementById("pause-button");

play.addEventListener("click", function() {
  pause.style.display = "block";
  play.style.display = "none";
});

pause.addEventListener("click", function() {
  play.style.display = "block";
  pause.style.display = "none";
});

// CHOOSE IMAGE ACCORDING TO CORRESPONDING DOT //

for (var i = 0; i < dots.length; i++) {
 (function(dotsMove){
    dots[i].onclick = function() {
      if (dotsMove !== currentSlide) {
        document.querySelector(".image-dot.active").classList.remove("active");
        this.classList.add("active");
        document.querySelector(".image.show").classList.remove("show");
        slides[dotsMove].classList.add("show");
        currentSlide = dotsMove;
      }
   }
 })(i);
}
