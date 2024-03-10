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
      addNewTodo(todoInput.value);
    } else {
      alert('내용을 작성해 주세요.');
    }
  });
}

function addNewTodo(mainText) {
  const numOfTodos = document.querySelectorAll('.todo').length
  const currTodoNum = numOfTodos + 1;

  // create 'todo' div
  const newTodo = document.createElement('div');
  newTodo.className = 'todo';
  newTodo.setAttribute('id', `todo-${currTodoNum}`);

  // create 'todo-title'
  const newTodoTitle = document.createElement('div');
  newTodoTitle.className = 'todo-title';

  // create todo input(checkbox)
  const newTodoInput = document.createElement('input');
  newTodoInput.setAttribute('id', `todo-${currTodoNum}-cb`);
  newTodoInput.type = 'checkbox';

  // create todo label(main text)
  const newTodoLbl = document.createElement('label');
  newTodoLbl.setAttribute('for', `todo-${currTodoNum}-cb`);
  newTodoLbl.innerText = mainText;

  // create todo 'delete-button'
  const newTodoDelBtn = document.createElement('button');
  newTodoDelBtn.className = 'delete-button';
  newTodoDelBtn.setAttribute('id', `todo-${currTodoNum}-dbtn`);
  newTodoDelBtn.innerText = '삭제';

  newTodoDelBtn.addEventListener('click', (event) => {
    // const idToDelete = 
    console.log(event.target.id);
  })

  // pack newTodoInput and newTodoLbl inside newTodoTitle
  newTodoTitle.appendChild(newTodoInput);
  newTodoTitle.appendChild(newTodoLbl);

  // pack newTodoTitle and newTodoDelBtn inside newTodo
  newTodo.appendChild(newTodoTitle);
  newTodo.appendChild(newTodoDelBtn);

  // add newTodoTitle inside todo-container
  todoContainer.appendChild(newTodo);

  // delete todo-write-button
  todoWriteBtn.remove();
  // reWrite todo-write-button by innerHTML
  todoContainer.innerHTML += '<button class="todo-write-button"><img src="./images/plus_icon.svg"/></button>';
  // reBind todoWriteBtn
  todoWriteBtn = document.querySelector('.todo-write-button');
  // reAdd eventListenter to todoWriteBtn
  todoWriteBtn.addEventListener('click', writeNewTodo);  
}


todoWriteBtn.addEventListener('click', writeNewTodo);