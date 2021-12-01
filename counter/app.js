const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");

let count = 0;
// we iterate over each button and select the button that got clicked
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const btnClicked = e.currentTarget.classList;
    if (btnClicked.contains("increase")) {
      count++;
    } else if (btnClicked.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    value.innerHTML = count;
  });
});
