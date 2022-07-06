const inputRef = document.querySelector("#validation-input");
inputRef.addEventListener("blur", onInputRefBlur);

function onInputRefBlur(event) {
  const target = event.currentTarget;
  target.value.length === Number(target.dataset.length)
    ? target.classList.remove?.("invalid") || target.classList.add("valid")
    : target.classList.add("invalid");
}
