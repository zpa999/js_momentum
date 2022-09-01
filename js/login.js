const loginUsername = document.querySelector("#login_username");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form_input");

const images = ["./img/0.jpg", "./img/1.jpg", "./img/2.jpg", "./img/3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = "url(" + `${chosenImage}` + ")";

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
