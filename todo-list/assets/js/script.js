document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task");
  const addButton = document.getElementById("add");
  const todoList = document.getElementById("todos");

  function getTodos() {
    return JSON.parse(localStorage.getItem("todos")) || [];
  }

  function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {
    const todos = getTodos();
    todoList.innerHTML = "";

    todos.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("remove");
      deleteBtn.addEventListener("click", () => {
        removeTask(index);
      });

      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });
  }

  function addTask() {
    const task = taskInput.value.trim();
    if (!task) return;

    const todos = getTodos();
    todos.push(task);
    saveTodos(todos);
    taskInput.value = "";
    renderTodos();
  }

  function removeTask(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
  });

  renderTodos();
});
