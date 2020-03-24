var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function createList() {
  listElement.innerHTML = '';

  for (todo of todos) {
    var list = document.createElement('li');
    listElement.appendChild(list);

    var listName = document.createTextNode(todo);
    list.appendChild(listName);

    var destroy = document.createElement('a');
    destroy.setAttribute('href', '#')
    list.appendChild(destroy);

    var position = todos.indexOf(todo);
    destroy.setAttribute('onclick', 'deleteTodo(' + position + ')')

    var destroyName = document.createTextNode('Excluir');
    destroy.appendChild(destroyName);
  }
}

createList();

buttonElement.onclick = function() {
  todos.push(inputElement.value);
  inputElement.value = '';
  createList();
  saveToStorage();
}

function deleteTodo(position) {
  todos.splice(position, 1);
  createList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos))
}