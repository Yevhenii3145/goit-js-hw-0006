function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.body;

const buttonRef = document.querySelector(".change-color");

const spanRef = document.querySelector(".color");

buttonRef.addEventListener("click", onButtonRefClick);

function onButtonRefClick() {
  const currentBodyColor = getRandomHexColor();
  bodyRef.style.backgroundColor = currentBodyColor;
  spanRef.textContent = currentBodyColor;

  const currentBtnColor = getRandomHexColor();
  buttonRef.style.backgroundColor = currentBtnColor;
  if (buttonRef.textContent !== "Change color") {
    buttonRef.textContent = "Change colors: " + currentBtnColor;
    return;
  }
  buttonRef.textContent += `s: ${currentBtnColor}`;
}
