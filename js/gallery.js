"use strict";

var photoDivs = document.getElementsByClassName("gallery-image");

var button_next = document.getElementById("button_next");

var button_previous = document.getElementById("button_previous");

var photoNumber = document.getElementById("stepper");

var currentPhotoNumber = 0;

photoDivs[currentPhotoNumber].classList.remove('hideThis');

photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;

button_next.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add("hideThis");
  currentPhotoNumber = currentPhotoNumber + 1;

  if (currentPhotoNumber === photoDivs.length) {
    currentPhotoNumber = 0;
  }

  photoDivs[currentPhotoNumber].classList.remove('hideThis');

  photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;

});

button_previous.addEventListener('click', function() {
  photoDivs[currentPhotoNumber].classList.add("hideThis");
  currentPhotoNumber = currentPhotoNumber - 1;

  if (currentPhotoNumber < 0) {
    currentPhotoNumber = photoDivs.length - 1;
  }

  photoDivs[currentPhotoNumber].classList.remove('hideThis');

  photoNumber.innerHTML = (currentPhotoNumber + 1) + " / " + photoDivs.length;

});
