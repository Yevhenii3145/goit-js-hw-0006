const inputRef = document.querySelector("#name-input");

const nameRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputRefChange);

function onInputRefChange(event) {
  return (nameRef.textContent = !event.currentTarget.value
    ? (nameRef.textContent = "Anonymous")
    : (nameRef.textContent = event.currentTarget.value));
}
