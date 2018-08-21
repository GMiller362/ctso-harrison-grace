
"use strict"

// Global Variables
var formValidity = true;

// Function to validate required fields
function validateRequired() {
      var inputElements = document.querySelectorAll("#contactinfo input");
      var errorDiv = document.getElementById("errorText");
      var fieldsetValidity = true;
      var elementCount = inputElements.length;
      var currentElement;
      try {
            // Loop through looking for blanks
            for (var i = 0; i < elementCount; i++) {
                  currentElement = inputElements[i];
                  // Blanks
                  if (currentElement.value === "") {
                        currentElement.style.background = "rgb(255, 233, 233)";
                        fieldsetValidity = false;
                  } else {
                        currentElement.style.background = "white";
                        errorDiv.style.display = "none";
                  }
            }
            if (fieldsetValidity === false) {
                  throw "Please Fill Out Everything";
            }
      } catch (msg) {
            errorDiv.style.display = "block";
            errorDiv.innerHTML = msg;
            formValidity = false;
      }
}

// Function to validate the entire form
function validateForm(evt) {
      if (evt.preventDefault) {
            evt.preventDefault();
      } else {
            evt.returnValue = false;
      }
      formValidity = true;

      // Function Calls
      validateRequired();

      if (formValidity === true) {
            document.getElementsByTagName("form")[0].submit();
      }
}

// Function to create Event Listeners
function createEventListeners() {
      var form = document.getElementsByTagName("form")[0];
      if (form.addEventListener) {
            form.addEventListener("submit", validateForm, false);
      } else if (form.attachEvent) {
            form.attachEvent("onsubmit", validateForm);
      }
}

// Page loads event handlers   
if (window.addEventListener) {
      window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
      window.attachEvent("onload", createEventListeners);
}