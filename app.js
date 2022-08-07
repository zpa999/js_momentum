const loginUsername = document.querySelector("#login_username");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form_input");

const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);
document.body.style.backgroundImage = "url(2.jpg)";

let username;

function onLoginSubmit(event) {
  event.preventDefault();
  username = `hello ${loginInput.value}`;
  localStorage.setItem("username", loginInput.value);
  loginForm.classList.add("hidden");
  loginUsername.innerText = username;
}

if (localStorage.getItem("username") === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add("hidden");
  loginUsername.innerText = `hello ${localStorage.getItem("username")}`;
}
