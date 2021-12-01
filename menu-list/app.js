const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti maxime quia, qui quis vitae sed sint nihil quos non tempora.",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus reiciendis ad expedita ullam laborum architecto sapiente voluptas, itaque magnam harum!",
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae suscipit maxime doloribus tempore eos placeat distinctio blanditiis illo ea.",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae suscipit maxime doloribus tempore eos placeat distinctio blanditiis illo ea.",
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae suscipit maxime doloribus tempore eos placeat distinctio blanditiis illo ea.",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae suscipit maxime doloribus tempore eos placeat distinctio blanditiis illo ea.",
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae suscipit maxime doloribus tempore eos placeat distinctio blanditiis illo ea.",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae suscipit maxime doloribus tempore eos placeat distinctio blanditiis illo ea.",
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae suscipit maxime doloribus tempore eos placeat distinctio blanditiis illo ea.",
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae suscipit maxime doloribus tempore eos placeat distinctio blanditiis illo ea.",
  },
];
const container = document.querySelector(".btn-container");
const sectionCenter = document.querySelector(".section-center");

// page loads and displays the menu
window.addEventListener("DOMContentLoaded", function () {
  displayMenu(menu);
  menuButtons();
});

// display menu
function displayMenu(menuItems) {
  const menuList = menuItems.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
         
          </div>
        </article>`;
  });
  sectionCenter.innerHTML = menuList.join("");
}

// menu filter

function menuButtons() {
  const menuBtns = menu.reduce(
    function (values, item) {
      //console.log(values, item); // item => the objects in the array // values => the button categories
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoriesBtns = menuBtns.map(function (btn) {
    return `<button type="button" class="filter-btn" data-id=${btn}>
          ${btn}
        </button>`;
  });
  container.innerHTML = categoriesBtns.join("");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // filter the menu by category
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id; // the category that got clicked

      const menuCategory = menu.filter(function (item) {
        if (item.category === category) {
          return item;
        }
      });
      if (category === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCategory);
      }
    });
  });
}
