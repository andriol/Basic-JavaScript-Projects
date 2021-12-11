const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const slides = document.querySelectorAll(".slide");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
prevBtn.addEventListener("click", function () {
  counter--;
  slider();
});
nextBtn.addEventListener("click", function () {
  counter++;
  slider();
});
function slider() {
  /************ option one ************/
  //   if (counter === slides.length) {
  //     counter = 0;
  //   }
  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }
  /********** option two ********/
  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
