const arraysTodos = [];
const listTodoElement = document.querySelector("#list-todo");
const inputTodo = document.querySelector("#todo-input");

// agrego un evento al formulario
const addTodo = (newTodo = "") => {
    const elementA = document.createElement("a");
    elementA.textContent = newTodo;
    elementA.classList.add("list-group-item", "list-group-item-action");
    listTodoElement.appendChild(elementA);
}

const addTodos = (todos = []) => {
    todos.forEach(e => {
        addTodo(e);
    });
}

const getLocalStorage = (key = "") => {
    return JSON.parse(localStorage.getItem(key) ?? "");
}
const saveLocalStorage = (key = "", value) => {
    
    localStorage.setItem(key, JSON.stringify(value));
}

document.querySelector("#form-todo").addEventListener("submit", (e) => {
    // prevengo su evento por defecto por la tanto no recarga
    e.preventDefault();
    // obtengo valores del input

    const inputTodoText = inputTodo.value.replace(" ", "");
    // <a href="#" class="list-group-item list-group-item-action">Item</a>
    if (inputTodoText.length > 0) {
        // si tiene valores
        arraysTodos.push(inputTodoText);
        addTodo(inputTodoText);
        saveLocalStorage("mysTodos", arraysTodos);
    } else {
        // muestro una alertaa
        alert("El input esta vacio")
    }
});

document.querySelector("#search-input").addEventListener("keyup", (e) => {
    // console.log(arraysTodos);
    const searchText = e.target.value;
    // si no esta vacio el input
    if (searchText.length > 0) {
        // busco el las coincidencias en el array
        const findResults = arraysTodos.filter((e) => e === searchText);
        // hay resultados de la busqueda
        if (findResults.length > 0) {
            // vacio la lista de todos
            listTodoElement.innerHTML = "";
            // renderizo los resultados encontrados 
            addTodos(findResults)

        }
    } else {
        // si esta vacio
        // elimino los elementos hijos
        listTodoElement.innerHTML = "";
        // renderizo en memoria
        addTodos(arraysTodos);
    }

});


// como guardarlo en el locastorage
