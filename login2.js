const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});



function validateSignUpForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    alert("Please fill in all the fields");
    return false;
  }
  return true;
}

function validateSignInForm() {
  var signInEmail = document.getElementById("signInEmail").value;
  var signInPassword = document.getElementById("signInPassword").value;

  if (signInEmail === "" || signInPassword === "") {
    alert("Please fill in all the fields");
    return false;
  }
  return true;
}