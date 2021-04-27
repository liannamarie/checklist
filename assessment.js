let todoList = [];


document.querySelector('form').addEventListener("submit", function(event){
event.preventDefault();

let input = document.querySelector('input');
if (input.value !='')
addTodo(input.value);
input.value = '';
})

function addTodo(input){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="delete">x</span><input type="checkbox">${input}</label>`;
    ul.appendChild(li);
}

startEvent();

function startEvent(){
    document.querySelector('form').addEventListener('submit',submit);
    document.querySelector('ul').addEventListener('click',deleteCheck);

}

function deleteCheck(event){
    if(event.target.className == 'delete')
    deleteTask(event);
    else {
        checkTask(event);
    
    }
} 

function deleteTask(event){
    let remv = event.target.parentNode;
    let parentNode = remv.parentNode;
    parentNode.removeChild(remv);

}

function checkTask(event){
    const todo = event.target.nextSibling;
    if(event.target.checked){
        document.querySelector('ul').style.textDecoration = "line-through";
    } else {
        document.querySelector('ul').style.textDecoration = "none";
    }
}
