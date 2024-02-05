const addBtn = document.querySelector(".Add");
const removeBtn = document.querySelector(".Remove");
const todoList = document.getElementById("todo-list");
const inpt = document.getElementById("task-input");
const head2 = document.querySelector("h2");

fetch("./index.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! status ${res.status}`);
    }
    console.log("type:", typeof res);
    return res.json();
  })
  .then((data) => {
    console.log("The data is:", data);
  })
  .catch((error) => {
    console.error("unable to fetch data:", error);
  });
// console.log("This is json data", jsonData)
// const sample =require("./index.json");
// script.js
// import user from "./index.json" assert { type: 'json' };
// console.log(user)

document.addEventListener("DOMContentLoaded", () => {
  let str = "";
  Object.keys(localStorage).forEach((key) => {
    str += `<li>${localStorage[key]}</li>`;
  });
  todoList.innerHTML = str;
  console.log("he");
  if (localStorage.length === 0) {
    head2.style.display = "block";
  } else {
    head2.style.display = "none";
  }
});
addBtn.addEventListener("click", () => {
  localStorage.setItem(localStorage.length + 1, inpt.value);
  inpt.value = "";
  console.log(localStorage);
  const n = localStorage.length;
  todoList.innerHTML += `<li>${localStorage[n]}</li>`;
  if (localStorage.length === 0) {
    head2.style.display = "block";
  } else {
    head2.style.display = "none";
  }
});
removeBtn.addEventListener("click", () => {
  str = "";
  let i = 0;
  Object.keys(localStorage).forEach((key) => {
    if (i == 0) {
      localStorage.removeItem(key);
      i++;
    } else str += `<li>${localStorage[key]}</li>`;
  });
  todoList.innerHTML = str;
  if (localStorage.length === 0) {
    head2.style.display = "block";
  } else {
    head2.style.display = "none";
  }
});
todoList.addEventListener("click", (e) => {
  if (e.target.style.backgroundColor === "green") {
    e.target.style.backgroundColor = "#ffe4d2";
    e.target.style.textDecoration = "none";
  } else {
    e.target.style.textDecoration = "line-through";
    e.target.style.backgroundColor = "green";
  }
});
