const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");

// add event listener to the container
about.addEventListener("click", function (e) {
  const element = e.target.dataset.id; // get the data id(history,vision,goals)
  if (element) {
    // we iterate over the buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // we iterate over the articles
    contents.forEach(function (content) {
      content.classList.remove("active");
    });
    const currElement = document.getElementById(element);
    currElement.classList.add("active");
  }
});
