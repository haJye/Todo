let array = [""];

const tasker = document.querySelector(".tasker");
const firstTask = document.querySelector(".first-task");
const otherTasks = document.querySelector(".other-tasks");
let task = document.querySelector(".task-input");
const addTaskButton = document.querySelector(".button-add");
const sort = document.querySelector(".sort");
const search = document.getElementById("search");

renderList();

addTaskButton.addEventListener("click", addHandler);

sort.addEventListener("click", sortButtonChange);

function renderList() {
  otherTasks.innerHTML = "";
  array.forEach((item, index) => {
    otherTasks.append(createTaskElement(item, index));
  });
}

function sortButtonChange(event) {
  event.target.classList.toggle("sort-up");

  if (event.target.classList.contains("sort-up")) {
    sortHandlerAscending();
  } else {
    sortHandlerDescending();
  }
}

function sortHandlerAscending() {
  array.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  renderList();
}

function sortHandlerDescending() {
  array.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    if (a === b) {
      return 0;
    }
  });
  renderList();
}

function addHandler() {
  array.push("");
  renderList();
}

function createTaskElement(arrayEl, index) {
  let block = document.createElement("div");
  block.classList.add("task-block");
  let input = document.createElement("input");
  input.classList.add("task-input");

  let xButton = document.createElement("button");
  xButton.classList.add("x-button");
  xButton.addEventListener("click", xButtonHandler);

  input.value = arrayEl;
  input.id = index;

  input.addEventListener("input", (event) => {
    let index = event.target.id;
    let value = event.target.value;
    array[index] = value;
  });

  function xButtonHandler(event) {
    let taskToDelete = event.target.previousElementSibling;
    let parent = event.target.parentElement;

    array = array.filter((item) => item != taskToDelete.value);

    if (array.length >= 1) {
      parent.remove();
    }
  }

  block.append(input, xButton);
  return block;
}


let count = document.getElementsByClassName("task-input");
let otask = document.getElementsByClassName("other-tasks");
let xbtn = document.getElementsByClassName("x-button");
let tblock = document.getElementsByClassName("task-block")

search.addEventListener("keyup", function () {
  let arr = [...count];
  let arr1 = [...tblock];

  arr.forEach((item) => {
    console.log(item.value);
  });
  
  arr.forEach((item) => {
    if (
      !item.value.toLowerCase().trim().includes(this.value.toLowerCase().trim())
    ) {
      item.classList.add("hidden");
    } else if (
      item.value.toLowerCase().trim().includes(this.value.toLowerCase().trim())
    ) {
      item.classList.remove("hidden");
    }
  });
  arr1.forEach((item)=>{
    // console.log(item.firstChild.classList[1])
    if(item.firstChild.classList[1]==="hidden"){
      item.classList.add('hidden')
    }
    else{
      item.classList.remove("hidden")
    }
  })
});