var arrayItems = {};
var createButton = document.querySelector("button#create");
var todoinput = document.getElementById("todo-input");
var deleteButton = document.getElementById("deleteTodo");

if(localStorage.getItem("items") === null){
    setup();
}
else{
    index()
}

createButton.onclick = ()=>{
    create(todoinput.value);
}

function setup(){
    arrayItems = {"content":["Estudar JavaScript", "Estudar HTML", "Varrer o Quintal"]};

    console.log("localStorage criado");
    localStorage.setItem("items", JSON.stringify(arrayItems));

    var lista = JSON.parse(localStorage.getItem("items"));

    for(var i = 0; i < lista.content.length; i++){
        
        var divTodo = document.createElement("div");
        var buttonTodo = document.createElement("button");
        var pTodo = document.createElement("p");
        
        pTodo.innerHTML = lista.content[i];
        buttonTodo.innerHTML = "Deletar ToDo";

        divTodo.className = "todo";
        buttonTodo.id = "deleteTodo";

        divTodo.appendChild(pTodo);
        divTodo.appendChild(buttonTodo);

        document.querySelector("div.todos").appendChild(divTodo);

    }
}

function index(){
    var lista = JSON.parse(localStorage.getItem("items"));

    for(var i = 0; i < lista.content.length; i++){
        
        var divTodo = document.createElement("div");
        var buttonTodo = document.createElement("button");
        var pTodo = document.createElement("p");

        buttonTodo.setAttribute("onclick", "deleteItem("+ i +")");
        
        pTodo.innerHTML = lista.content[i];
        buttonTodo.innerHTML = "Deletar To-Do";

        divTodo.className = "todo";
        buttonTodo.id = "deleteTodo";

        divTodo.appendChild(pTodo);
        divTodo.appendChild(buttonTodo);

        document.querySelector("div.todos").appendChild(divTodo);
        
    }
}

function create(item){
    if(item.length > 0){
        var lista = JSON.parse(localStorage.getItem("items"));
        if(lista.content.indexOf(item) > -1){
            alert("Este To-Do já existe!");
        }else{
            var todos = document.querySelectorAll(".todo");

            lista.content.push(item);
            todos.forEach(event =>{
                event.remove();
            })

            localStorage.setItem("items", JSON.stringify(lista));
            index();
        }
    }
}

function deleteItem(position){
    var lista = JSON.parse(localStorage.getItem("items"));
    var todos = document.querySelectorAll(".todo");
    todos.forEach(e =>{
        e.remove();
    });
    console.log(position);
    lista.content.splice(position, 1);
    localStorage.setItem("items", JSON.stringify(lista));
    index();
}