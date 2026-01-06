// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.textContent = text;
}
function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.parentNode.removeChild(element);
  }
}
function simulateClick(containerId, text) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.textContent = text;
}
function handleFormSubmit(formId, containerId) {
  const form = document.getElementById(formId);
  const container = document.getElementById(containerId);
  const errorMessage = document.getElementById("error-message");

  if (!form || !container || !errorMessage) return;

  const input = form.querySelector("input");
  const value = input.value.trim();

  if (value === "") {
    errorMessage.textContent = "Input cannot be empty";
    errorMessage.classList.remove("hidden");
    container.textContent = "";
  } else {
    container.textContent = value;
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
    input.value = "";
  }
}
module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};
