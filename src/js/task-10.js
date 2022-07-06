function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputOfQuantityRef = document.querySelector("#controls > input");

const createBtnRef = inputOfQuantityRef.nextElementSibling;

const destroyBtnRef = createBtnRef.nextElementSibling;

const targetBoxRef = document.querySelector("#boxes");

createBtnRef.addEventListener("click", onCreateBtnRefClick);

destroyBtnRef.addEventListener("click", destroyBoxes);

function onCreateBtnRefClick() {
  createBoxes.call(inputOfQuantityRef, inputOfQuantityRef.value);
}

function destroyBoxes() {
  targetBoxRef.innerHTML = "";
}

function createBoxes(amount) {
  const allSquares = [];
  let sizeOfDiv = "30px";
  for (let i = 1; i <= amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = sizeOfDiv;
    div.style.height = sizeOfDiv;
    div.style.backgroundColor = getRandomHexColor();
    allSquares.push(div);
    sizeOfDiv = parseInt(sizeOfDiv) + 10 + "px";
  }
  targetBoxRef.append(...allSquares);
}
