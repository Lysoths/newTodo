const container = document.querySelector(".container");
const input = document.querySelector(".input-menu input");
const createTodo = document.querySelector(".button-menu button");
const todoContainer = document.querySelector(".to-do-container");

createTodo.addEventListener("click", () => {
  const box = document.createElement("div");
  const box2 = document.createElement("div");

  if (input.value == "") {
    alert("Please enter new todo");
  } else {
    box.innerHTML = input.value;
    input.value = "";
    box.classList.add("todo");
    todoContainer.appendChild(box);
    const deleteBtn = document.createElement("button");
    const editBtn = document.createElement("button");
    box.appendChild(box2);
    box2.appendChild(deleteBtn);
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "Delete";
    box2.appendChild(editBtn);
    editBtn.classList.add("edit");
    editBtn.innerHTML = "Edit";
    deleteBtn.addEventListener("click", () => {
      box.remove();
    });

    editBtn.addEventListener("click", () => {
      box.innerText = prompt(`Enter a new Todo`);
      box.appendChild(box2);
      box2.appendChild(deleteBtn);
      deleteBtn.classList.add("delete");
      deleteBtn.innerHTML = "Delete";
      box2.appendChild(editBtn);
      editBtn.classList.add("edit");
      editBtn.innerHTML = "Edit";
    });
  }
});
