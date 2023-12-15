let TodoList = [
  {
    item: 'Buy Milk', 
    dueDate: '12/10/2023'
  }, 
{
  item: 'Go to Collage', 
  dueDate: '12/10/2023'
}
];
displayItems();


function addTodo() {
  let inputElm = document.querySelector("#todo-input");
  let dateElm = document.querySelector("#todo-date");
  let todoElm = inputElm.value;
  let todoDate = dateElm.value;
  TodoList.push({item: todoElm, dueDate: todoDate});
  inputElm.value = '';
  dateElm.value = '';

  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';
  for (let i = 0; i < TodoList.length; i++) {
    // let item = TodoList[i].item;
    // let dueDate = TodoList[i].dueDate;
    let {item, dueDate} = TodoList[i];
    newHtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class='btn-delete' onclick="TodoList.splice(${i}, 1);
      displayItems();">Delete</button>
    `;
  }
  containerElement.innerHTML = newHtml;
}
