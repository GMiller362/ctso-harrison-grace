
window.addEventListener("load", function() {
  document.getElementById("submit").onclick = runSubmit;
  document.getElementById("fName").oninput = validateFirstName;
  document.getElementById("lName").oninput = validateLastName;
  document.getElementById("email").oninput = validateEmail;
})

function runSubmit() {
  validateFirstName();
  validateLastName();
  validateEmail();
}

function validateFirstName() {
  var firstName = document.getElementById("fName");
  if (firstName.validity.valueMissing) {
    firstName.setCustomValidity("Enter your first name.");
  }
  else {
    firstName.setCustomValidity("");
  }
}

function validateLastName() {
  var lastName = document.getElementById("lName");
  if (lastName.validity.valueMissing) {
    lastName.setCustomValidity("Enter your last name.");
  }
  else {
    lastName.setCustomValidity("");
  }
}

function validateEmail() {
  var emailVar = document.getElementById("email");
  if (emailVar.validity.valueMissing) {
    emailVar.setCustomValidity("Enter your e-mail.");
  }
  else {
    emailVar.setCustomValidity("");
  }
}
