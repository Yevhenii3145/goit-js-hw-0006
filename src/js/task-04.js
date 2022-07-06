const counterValueRef = document.querySelector("#value");

const decreaseBtnRef = document.querySelector(
  "button[data-action='decrement']"
);
decreaseBtnRef.addEventListener("click", () => {
  counterValueRef.textContent -= 1;
  return counterValueRef.textContent;
});

const increaseBtnRef = document.querySelector(
  "button[data-action='increment']"
);
increaseBtnRef.addEventListener("click", () => {
  counterValueRef.textContent = Number(counterValueRef.textContent) + 1;
  return counterValueRef.textContent;
});
