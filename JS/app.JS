document.querySelectorAll('#filterButtons button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('#filterButtons button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    // You can add filtering logic here if needed
  });
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input me-2";

  const span = document.createElement("span");
  span.textContent = taskText;

  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-warning btn-sm me-2";
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", () => li.remove());

  const left = document.createElement("div");
  left.className = "d-flex align-items-center";
  left.appendChild(checkbox);
  left.appendChild(span);

  const right = document.createElement("div");
  right.appendChild(editBtn);
  right.appendChild(deleteBtn);

  li.appendChild(right);
  li.appendChild(left);

  document.getElementById("taskList").appendChild(li);
  input.value = ""; // Clear input field

}
//clearTasks button functionality
function clearTasks() {
  document.getElementById("taskList").innerHTML = ""; // Clear the task list by setting innerHTML to an empty string
}
// Attach event listeners after DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".btn.btn-primary").addEventListener("click", addTask);
  document.querySelector(".btn.btn-danger").addEventListener("click", clearTasks);
  document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
  });
});


