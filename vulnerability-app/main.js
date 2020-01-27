let $loginButton = document.querySelector(".login-btn");
let $logoutButton = document.querySelector(".logout-btn");
let $usernameSpan = document.querySelector(".user-login");

let noLoggerInUserText = "Mysterious person";
let nameOfTheUser = "Dastin";

let localStorateUsernameKey = "username";

if (localStorage.getItem(localStorateUsernameKey)) {
    $usernameSpan.textContent = localStorage.getItem(localStorateUsernameKey);
} else {
    $usernameSpan.textContent = noLoggerInUserText;
}

$loginButton.addEventListener("click", () => {
    $usernameSpan.textContent = nameOfTheUser;
    localStorage.setItem(localStorateUsernameKey, nameOfTheUser);
});

$logoutButton.addEventListener("click", () => {
    $usernameSpan.textContent = noLoggerInUserText;
    localStorage.removeItem(localStorateUsernameKey);
});
// debugger;
