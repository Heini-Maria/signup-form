const passwordValidation = () => {
  const passwordNoMatch = document.getElementById("password-no-match");
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("password-confirm");
  if (password.value !== passwordConfirmation.value){
    passwordNoMatch.style.display = "block";
    password.style.border = "2px solid red";
    passwordConfirmation.style.border = "2px solid red";
    return false;
  }
}
