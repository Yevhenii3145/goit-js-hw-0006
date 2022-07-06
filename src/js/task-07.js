const controllerRef = document.querySelector("#font-size-control");

const targetTextRef = document.querySelector("#text");
targetTextRef.style.fontSize = controllerRef.value + "px";

controllerRef.addEventListener("input", onControllerRefInput);

function onControllerRefInput(event) {
  targetTextRef.style.fontSize = controllerRef.value + "px";
}
