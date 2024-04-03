document.addEventListener("DOMContentLoaded", () => {

let form = document.getElementById('create-task-form');
let userInput = form.querySelector('#new-task-description');
let tasksUl = document.getElementById('tasks');
let dropdown = form.querySelector('#dropdown');
// let highPriority = form.querySelector('#high');
// let mediumPriority = form.querySelector('#medium');
// let lowPriority = form.querySelector('#low');


form.addEventListener('submit', (e) => {
  e.preventDefault()
  addTask()
  userInput.value = ""
})


function addTask() {
  if (userInput.value !== "") {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = "X"
  li.textContent = userInput.value + "   "
  tasksUl.appendChild(li)
  li.appendChild(btn)
  btn.addEventListener('click', deleteTask)
  
  if (dropdown.value === 'high') {
    li.style.backgroundColor = "red"
  } else if (dropdown.value === 'medium') {
    li.style.backgroundColor = "yellow"
  } else if (dropdown.value === 'low') {
    li.style.backgroundColor = "green"
  }
}
}

function deleteTask(e) {
  e.target.parentNode.remove()
}














});
