// ===== Handle Button Clicks =====
function changeBackgroundColor() {
  document.body.style.backgroundColor = "rgb(173, 216, 230)";
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = "white";
}

// ===== Capture Keyboard Input =====
function displayKeyPress(event) {
  const keyDisplay = document.getElementById("keyPressDisplay");
  if (keyDisplay) {
    keyDisplay.textContent = `Key pressed: ${event.key}`;
  }
}

// ===== Process Text Input =====
function displayUserInput() {
  const inputDisplay = document.getElementById("textInputDisplay");
  const userInput = document.getElementById("textInput");
  if (inputDisplay && userInput) {
    inputDisplay.textContent = `You typed: ${userInput.value}`;
  }
}

// ===== Attach Event Listeners =====
function setupEventListeners() {
  const changeBtn = document.getElementById("changeColorButton");
  if (changeBtn) changeBtn.addEventListener("click", changeBackgroundColor);

  // Reset on body double-click (not button double-click)
  document.body.addEventListener("dblclick", resetBackgroundColor);

  document.addEventListener("keydown", displayKeyPress);

  const textInput = document.getElementById("textInput");
  if (textInput) textInput.addEventListener("input", displayUserInput);
}

// Initialize listeners when DOM is loaded
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", setupEventListeners);
}

// Export for testing
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};