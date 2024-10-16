var sliderImages = document.querySelectorAll('.slider img');
var i = 0;
var interval;

function slider() {
  sliderImages.forEach(function (image, index) {
    image.style.transform = `translateX(${(index - i) * 100}%)`;
  });
}

function nextImage() {
  if (i < sliderImages.length - 1) {
    i++;
  } else {
    i = 0;
  }
  slider();
  resetAutoSlide();
}

function prevImage() {
  if (i > 0) {
    i--;
  } else {
    i = sliderImages.length - 1;
  }
  slider();
  resetAutoSlide();
}

sliderImages.forEach(function (image, index) {
  image.style.transform = `translateX(${index * 100}%)`;
});

interval = setInterval(nextImage, 2000);

function resetAutoSlide() {
  clearInterval(interval);
  interval = setInterval(nextImage, 2000);
}
