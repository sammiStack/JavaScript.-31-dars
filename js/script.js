const input = document.querySelector("input");
const btn = document.querySelector("button");
const db = "Hello, world";
const p = document.querySelector("p");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (db === input.value) {
    p.innerHTML = `Correct answer`;
  } else {
    p.innerHTML = `Your answer is incorrect. Correct answer ${db}`;
  }
});
