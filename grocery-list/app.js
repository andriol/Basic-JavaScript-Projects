const form = document.querySelector(".grocery-form");
const input = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const groceryList = document.querySelector(".grocery-list");
const groceryContainer = document.querySelector(".grocery-container");
const alert = document.querySelector(".alert");
const clearBtn = document.querySelector(".clear-btn");
// variables
let edit;
let editElement;
let editID = "";
// event listeners
form.addEventListener("submit", additems);

clearBtn.addEventListener("click", clearItems);

window.addEventListener("DOMContentLoaded", setUpItems);
// add items
function additems(e) {
  e.preventDefault();
  const value = input.value;
  const id = new Date().getTime().toString();
  if (value && !edit) {
    createList(id, value);
    displayAlert("item added to the list", "success");
    groceryContainer.classList.add("show-container");
    addToLocalStorage(id, value);
    defaultStatus();
  } else if (value && edit) {
    editElement.innerHTML = value;
    displayAlert("value updated", "success");
    editLocalStorage(editID, value);
    defaultStatus();
  } else {
    displayAlert("Please enter a value", "danger");
  }
}
// add and remove alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}
// set everything to default state
function defaultStatus() {
  edit = false;
  input.value = "";
  editID = "";
  submitBtn.textContent = "submit";
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  input.value = editElement.innerHTML;
  edit = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
}

// clear all items

function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      groceryList.removeChild(item);
    });
    displayAlert("items cleared", "success");
    groceryContainer.classList.remove("show-container");
    defaultStatus();
    localStorage.removeItem("list");
  }
}
// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  groceryList.removeChild(element);
  if (groceryList.children.length === 0) {
    groceryContainer.classList.remove("show-container");
  }
  displayAlert("item deleted", "success");
  defaultStatus();
  removeFromLocalStorage(id);
}
// local storage
/******* add to local storage *******/
function addToLocalStorage(id, value) {
  const item = { value, id };
  let groceries = getLocalStorage();
  console.log(groceries);
  groceries.push(item);
  localStorage.setItem("list", JSON.stringify(groceries));
}
/****** remove from local storage ******/
function removeFromLocalStorage(id) {
  let groceries = getLocalStorage();
  groceries.filter(function (grocery) {
    if (grocery.id !== id) {
      return grocery;
    }
  });
  localStorage.setItem("list", JSON.stringify(groceries));
}
/****** edit from local storage ******/
function editLocalStorage(id, value) {
  let groceries = getLocalStorage();
  groceries.map(function (grocery) {
    if (grocery.id === id) {
      grocery.value = value;
    }
    return grocery;
  });
  localStorage.setItem("list", JSON.stringify(groceries));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// display items
function setUpItems() {
  let groceries = getLocalStorage();
  if (groceries.length > 0) {
    groceries.forEach(function (grocery) {
      createList(grocery.id, grocery.value);
    });
    groceryContainer.classList.add("show-container");
  }
}
// creatingthe list container
function createList(id, value) {
  const element = document.createElement("article");
  const attribute = document.createAttribute("data-id");
  attribute.value = id;
  element.setAttributeNode(attribute);
  element.classList.add("grocery-item");
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;

  // event listeners on edit and delete button
  const editBtn = element.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);

  groceryList.appendChild(element);
}
