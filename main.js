function addNewItem () {
    console.log("Adding New Items");
    // Getting Text to be used for new item
    let textInputEl = document.getElementById("new-item-text");
    let textInput = textInputEl.value;

    console.log("Going to add TODO with following text:"+ textInput);

    let myTodoList = document.getElementById("main-todo-list");

    let newItem = document.createElement('li');

    newItem.innerHTML=`
            <div>
                <input type="checkbox">
                <span>${textInput}</span>
                <input type="button">
            </div>
    `;

    myTodoList.appendChild(newItem);

    // And we clear the input field
    textInputEl.value =""

}