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
    let newText = document.createTextNode(textInput);
    let newButton = document.createElement('input');
    newButton.setAttribute('type', 'button');

    newSpan.appendChild(newText);
    newDiv.appendChild(newCheckbox);
    newDiv.appendChild(newSpan);
    newDiv.appendChild(newButton);
    newItem.appendChild(newDiv);
    myTodoList.appendChild(newItem);

    // newItem.innerHTML=`
    //         <div>
    //             <input type="checkbox">
    //             <span>${textInput}</span>
    //             <input type="button">
    //         </div>
    // `;

    

    // And we clear the input field
    textInputEl.value =""

}

function main () {
    console.log("Running Main");
    // document.getElementById("new-item-button").onclick = addNewItem;
    document.getElementById("new-item-button").addEventListener('click', addNewItem);
    // document.getElementById("new-item-button").addEventListener('click', () => {alert("Hello")});
}

main();