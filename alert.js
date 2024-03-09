const alertButton = document.querySelector(".alert");
const promptButton = document.querySelector(".prompt");

alertButton.addEventListener("click", () => {
  alert("This is a normal Alert");
});

promptButton.addEventListener("click", () => {
  prompt("What is your name");
});
