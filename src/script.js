const passMatch = document.querySelector(".passwordMatch");
const password = document.getElementById("password");
const confirmPssword = document.querySelector("#confirmPassword");
// passMatch.classList.remove("invisible");



confirmPssword.onkeyup = function () {
    if (password.value == confirmPassword.value) {
        document.getElementById("submit").disabled = false;
        passMatch.classList.add("invisible");
    } else {
        document.getElementById("submit").disabled = true;
        passMatch.classList.remove("invisible");
    }
};
