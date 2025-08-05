document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".todo-form");
  const input = form.querySelector("input");
  const button = form.querySelector("button");
  const list = document.querySelector(".todo-list");

  // Enable/disable button based on input
  input.addEventListener("input", function () {
    // button.disabled = input.value.trim() === "";
  });

  // Handle form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskText = input.value.trim();
    if (taskText === "") return;

    // Create new task item
    const li = document.createElement("li");
    li.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const id = `task-${Date.now()}`;
    checkbox.id = id;

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.style.marginLeft = "auto";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.border = "none";
    deleteBtn.style.cursor = "pointer";

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
    button.disabled = true;

    deleteBtn.addEventListener("click", function () {
      li.remove();
    });
  });
});
