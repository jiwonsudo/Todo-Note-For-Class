const todoContainer = document.querySelector('.todo-container');
const todoAddBtn = document.querySelector('.todo-add-button');
let todoWriteBtn = document.querySelector('.todo-write-button');

function writeNewTodo() {
  // delete todo-write-button
  todoWriteBtn.remove();

  // Add form to write new todo
  todoContainer.innerHTML += '<div class="todo-form-container"><input class="todo-form-input" type="text" maxlength="15"><button class="todo-add-button">추가</button></div>';

  const todoFormContainer = document.querySelector('.todo-form-container');
  const todoInput = document.querySelector('.todo-form-input');
  const addBtn = document.querySelector('.todo-add-button');

  addBtn.addEventListener('click', () => {
    // check input's innerText is not empty
    if (todoInput.value !== '') {
      todoFormContainer.remove();
      // pass input's inner value as argument
      addNewTodo(todoInput.value);
    } else {
      alert('내용을 작성해 주세요.');
    }
  });
}

function addNewTodo(mainText) {
  const numOfTodos = document.querySelectorAll('.todo').length;
  const currTodoNum = numOfTodos + 1;

  // delete todo-write-button
  todoWriteBtn.remove();

  // add New todo
  todoContainer.innerHTML += `<div id="todo-${currTodoNum}" class="todo"><div class="todo-title"><input type="checkbox" id="todo-${currTodoNum}-cbox"><label for="todo-${currTodoNum}-cbox">${mainText}</label></div><button id="todo-${currTodoNum}-dbtn" class="delete-button">삭제</button></div>`;
  // reWrite todo-write-button by innerHTML
  todoContainer.innerHTML += '<button class="todo-write-button"><img src="./images/plus_icon.svg"/></button>';
  // reBind todoWriteBtn
  todoWriteBtn = document.querySelector('.todo-write-button');
  // reAdd eventListenter to todoWriteBtn
  todoWriteBtn.addEventListener('click', writeNewTodo);
  // add eventListener to delete button
  const deleteButton = document.getElementById(`todo-${currTodoNum}-dbtn`);
  deleteButton.addEventListener('click', (event) => {
    event.target.parentNode.remove();
  });
  // add eventListener to checkBox
  const checkBox = document.getElementById(`todo-${currTodoNum}-cbox`);
  checkBox.addEventListener('change', (event) => {
    event.target.nextSibling.classList.toggle('done');
  });
}


// initial setting
todoWriteBtn.addEventListener('click', writeNewTodo);