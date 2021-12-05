const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
const scrollLinks = document.querySelectorAll(".scroll-link");

navToggle.addEventListener("click", function () {
  //linksContainer.classList.toggle("show-links");
  // add the height dynamically
  const heightContainer = linksContainer.getBoundingClientRect().height;
  console.log(heightContainer);
  const heightLinks = links.getBoundingClientRect().height;
  console.log(heightLinks);
  if (heightContainer === 0) {
    linksContainer.style.height = `${heightLinks}px`;
  } else {
    linksContainer.style.height = 0;
  }
});
// add or remove fixed nav and top-arrow at certain threshholds
window.addEventListener("scroll", function () {
  const heightScroll = window.pageYOffset;
  const heightNav = navbar.getBoundingClientRect().height;
  if (heightScroll > heightNav) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (heightScroll > 400) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// add nav and links heights dynamically
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const heightNav = navbar.getBoundingClientRect().height;
    console.log(heightNav); //82px
    const heightContainer = linksContainer.getBoundingClientRect().height;
    const navFixed = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - heightNav;
    console.log(element.offsetTop);
    console.log(position, heightNav, heightContainer);
    // if nav bar is not fixed meaning we start from the very top * large size
    if (!navFixed) {
      position = position - heightNav;
    }
    //in mobile size
    if (heightNav > 82) {
      position = position + heightContainer;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
