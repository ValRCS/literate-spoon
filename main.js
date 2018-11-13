function addNewItem () {
    console.log("Adding New Items");
    // Getting Text to be used for new item
    let textInputEl = document.getElementById("new-item-text");
    let textInput = textInputEl.value;

    console.log("Going to add TODO with following text:"+ textInput);

    let myTodoList = document.getElementById("main-todo-list");

    let newItem = document.createElement('li');
    let newDiv = document.createElement('div');
    let newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    let newSpan = document.createElement('span');
    newSpan.classList.add("d-inline-block","text-truncate","list-item");
    let newText = document.createTextNode(textInput);
    newSpan.addEventListener('mouseenter', openEditItemWindow);
    newSpan.addEventListener('mouseleave', closeEditItemWindow);
    let newButton = document.createElement('input');
    newButton.setAttribute('type', 'button');
    newButton.addEventListener('click', removeItem);

    newSpan.appendChild(newText);
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newButton);
    newItem.appendChild(newDiv);
    myTodoList.appendChild(newItem);

    // And we clear the input field
    textInputEl.value =""

}

function removeItem(event) {
    console.log("Removing Item");

    console.log(event.target.parentNode.parentNode.innerHTML);
    event.target.parentNode.parentNode.remove();
}

function openEditItemWindow(event) {
    //
    console.log("openEditItemWindow");
    event.target.setAttribute("contentEditable", "true");
    event.target.classList.add("editable-item");
}


function closeEditItemWindow(event) {
    console.log("closeEditItemWindow");
    event.target.setAttribute("contentEditable", "false");
    event.target.classList.remove("editable-item");
}

function main () {
    console.log("Running 'my little lamb' Main");
    // document.getElementById("new-item-button").onclick = addNewItem;
    document.getElementById("new-item-button").addEventListener('click', addNewItem);
    // document.getElementById("new-item-button").addEventListener('click', () => {alert("Hello")});
}

main();