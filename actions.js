const actionsForm = document.querySelector(".form");
const actionsFirstName = document.querySelector('[name="firstName"]');
const actionsLastName = document.querySelector('[name="lastName"]');
const actionsLevel = document.getElementById("level");
const actionsCategory = document.querySelector('[name="category"]');

actionsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = `Thank you ${actionsFirstName.value} for submitting the form, We have many courses for ${actionsCategory.value} automation ${actionsLevel.value} level`;
  alert(message);
});
