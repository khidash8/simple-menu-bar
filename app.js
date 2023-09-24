const spanElement = document.querySelector(".span-elements");
const menuSec = document.querySelector(".menu");
const spans = document.querySelectorAll(".span-elements span");
console.log(spans);

spanElement.addEventListener("click", () => {
  menuSec.classList.toggle("active");
  spans.forEach((span) => {
    span.classList.toggle("toggle");
  });
});
