function addNewItem () {
    console.log("Adding New Items");
    // Getting Text to be used for new item
    let textInputEl = document.getElementById("new-item-text");
    let textInput = textInputEl.value;

    console.log("Going to add TODO with following text:"+ textInput);

    let myTodoList = document.getElementById("main-todo-list");

    let newItem = document.createElement('li');
    
}