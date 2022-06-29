const arraysTodos = [];
const listTodoElement = document.querySelector("#list-todo");
// agrego un evento al formulario
function addTodo(newTodo) {
    const elementA = document.createElement("a");
    elementA.textContent = newTodo;
    arraysTodos.push(newTodo);
    elementA.classList.add("list-group-item", "list-group-item-action");
    listTodoElement.appendChild(elementA);
}
function addTodos(todos = []) {
    todos.forEach(e => {
        addTodo(e);
    });
}
document.querySelector("#form-todo").addEventListener("submit", (e) => {
    // prevengo su evento por defecto por la tanto no recarga
    e.preventDefault();
    // obtengo valores del input
    const inputTodo = document.querySelector("#todo-input");
    const inputTodoText = inputTodo.value.replace(" ", "");
    // <a href="#" class="list-group-item list-group-item-action">Item</a>
    if (inputTodoText.length > 0) {
        // si tiene valores
        addTodo(inputTodoText);

    } else {
        // muestro una alertaa
        alert("El input esta vacio")
    }
});

document.querySelector("#search-input").addEventListener("keyup", (e) => {
    const searchText = e.target.value;
    if (searchText.length > 0) {
        const findResults = arraysTodos.filter(e => e === searchText);
        if (findResults.length > 0) {
            // hay resultados
            listTodoElement.innerHTML = "";
            // si tiene valores
            addTodos(findResults)

        }
    }

});