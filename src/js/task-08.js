const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormRefSubmit);

function onFormRefSubmit(event) {
  event.preventDefault();
  const formRefElements = event.currentTarget.elements;
  if (!formRefElements.email.value || !formRefElements.password.value) {
    alert("Ну ты и желудина - заполни все поля :)");
    return;
  }

  const email = formRefElements.email.value;
  const password = formRefElements.password.value;

  const formData = {
    email,
    password,
  };
  console.log(formData);

  event.currentTarget.reset();
}
