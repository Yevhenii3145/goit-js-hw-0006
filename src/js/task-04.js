const counter = document.querySelector("#value");
console.log(counter);

let counterValue = counter.textContent;
console.log(counterValue);

const decreaseBtnRef = document.querySelector(
  "button[data-action='decrement']"
);
decreaseBtnRef.addEventListener("click", (counter) => {
  counter.textContent -= 1;

  counterValue = counter.textContent;
  return counterValue;
});
const increaseBtnRef = document.querySelector(
  "button[data-action='increment']"
);
