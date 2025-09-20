// Grab elements
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Function to add a new task
function addTask(taskText) {
  if (!taskText) return;

  // Create li
  const li = document.createElement("li");
  li.className = "flex items-center justify-between bg-gray-50 p-3 rounded shadow-sm";

  // Task text
  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "text-gray-700";

  // Buttons container
  const btnContainer = document.createElement("div");
  btnContainer.className = "space-x-2";

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "text-green-500 hover:text-green-700";
  completeBtn.onclick = () => span.classList.toggle("line-through");

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.className = "text-red-500 hover:text-red-700";
  deleteBtn.onclick = () => li.remove();

  btnContainer.appendChild(completeBtn);
  btnContainer.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(btnContainer);

  taskList.appendChild(li);
}

// Listen for form submission
taskForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload
  addTask(taskInput.value.trim());
  taskInput.value = ""; // Clear input
});
