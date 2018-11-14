function addNewItem() {
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
    //TODO add handler here
    newCheckbox.addEventListener('click', toggleItemsDone);
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

function handleKeyboardInput(event) {
    if (event.key === "Enter") { 
        console.log("Pressed enter");
        event.preventDefault();
        addNewItem();
    }
    console.log("Handling keyboard event");
    console.log("Pressed key:"+event.key);
}

function toggleItemsDone(event) {
    console.log("Marking event done");
    let spanArray = event.target.parentNode.getElementsByTagName('span');
    if (spanArray.length === 0 ) return;

    // if (event.target.checked) {
    //     // spanArray[0].innerHTML = `<s>${spanArray[0].innerHTML}</s>`;
    //     spanArray[0].style["text-decoration"] = "line-through";
    // } else {
    //     // spanArray[0].innerHTML = spanArray[0].innerHTML.replace("<s>","").replace("</s>","");
    //     spanArray[0].style["text-decoration"] = "none";
    // }
    spanArray[0].style["text-decoration"] = event.target.checked ? "line-through" : "none";
}

function init() {
    let myInput = document.getElementById('new-item-text');
    //ADD code here
    myInput.addEventListener('keydown', handleKeyboardInput);

    document.getElementById("new-item-button").addEventListener('click', addNewItem);
}

function main () {
    console.log("Running 'my little lamb' Main");
    //add Init Code
    init();
}

main();