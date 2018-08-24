
"use strict"

// Global Variables
var formValidity = true;

// Function to validate answer box
function validateAnswer() {
      var answerBox = document.getElementById("answer");
      var errorDiv = document.getElementById("errorText");
      var fieldsetValidity = true;
      try {
          // Validate textarea
          if (answerBox.value === "" || answerBox.value === answerBox.placeholder) {
            answerBox.style.background = "rgb(255, 233, 233)";
            fieldsetValidity = false;
          }
          else {
              answerBox.style.background = "white";
          }
      }
      catch (msg) {
          errorDiv.style.display = "block";
          errorDiv.innerHTML = msg;
          formValidity = false;
      }
  }
  
// Function to Validate Select Lists
function validateSelectList() {
      var selectElements = document.querySelectorAll("#contactinfo" + " select");
      var errorDiv = document.getElementById("errorText");
      var fieldsetValidity = true;
      var elementCount = selectElements.length;
      var currentElement;
      try {
          // Loop through input fields looking for blanks
          for (var i = 0; i < elementCount; i++) {
              currentElement = selectElements[i];
              // Blanks
              if (currentElement.selectedIndex === 0) {
                  currentElement.style.background = "rgb(255, 233, 233)";
                  fieldsetValidity = false;
              }
              // Not Blanks
              else {
                  currentElement.style.background = "white";
              }
          }
      }
      catch (msg) {
          errorDiv.style.display = "block";
          errorDiv.innerHTML = msg;
          formValidity = false;
      }
  }  

// Function to Validate Radio Buttons
function validateRadioButtons() {
      var radioElements = document.getElementsByName("contact");
      var errorDiv = document.getElementById("errorText");
      var fieldsetValidity = true;
      try {
            // Validate radio buttons one must be on
            if (!radioElements[0].checked && !radioElements[1].checked) {
                  for (var i = 0; i < radioElements.length; i++) {
                        radioElements[i].style.outline = "1px solid red";
                  }
                  fieldsetValidity = false;
            }
            else {
                  for (var i = 0; i < radioElements.length; i++) {
                        radioElements[i].style.outline = "";
                  }
            }
      } catch (msg) {
            errorDiv.style.display = "block";
            errorDiv.innerHTML = msg;
            formValidity = false;
      }
}

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
      validateRadioButtons();
      validateSelectList();
      validateAnswer();

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