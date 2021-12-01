// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
const reviewContainer = document.querySelector(".review");
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const btnContainer = document.querySelector(".button-container");
const btnNext = document.querySelector(".next-btn");
const btnPrev = document.querySelector(".prev-btn");
const btnRandom = document.querySelector(".random-btn");

let currentReview = 0;
// display the first review when page loads
window.addEventListener("DOMContentLoaded", function () {
  const loadingReview = reviews[currentReview];
  console.log(loadingReview);
  img.src = loadingReview.img;
  author.textContent = loadingReview.name;
  job.textContent = loadingReview.job;
  info.textContent = loadingReview.text;
});
// a reusable function with person as parameter
function displayPerson(person) {
  const loadReviews = reviews[person];
  img.src = loadReviews.img;
  author.textContent = loadReviews.name;
  job.textContent = loadReviews.job;
  info.textContent = loadReviews.text;
}
// next btn * when current review is greater than the last review is starts over
btnNext.addEventListener("click", function () {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  displayPerson(currentReview);
});

// prev btn * when current review decrements below reviews[0] goes back to the last item in the array
btnPrev.addEventListener("click", function () {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  displayPerson(currentReview);
});

//random review button
btnRandom.addEventListener("click", function () {
  const randomReview = Math.floor(Math.random() * reviews.length);

  displayPerson(randomReview);
});
