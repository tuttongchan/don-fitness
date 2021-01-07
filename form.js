// Contact Form Page
const registerForm = document.querySelector('.register-form');
const submitBtn = document.getElementById('submit-btn');
const submissionStatus = document.querySelector('.submission-status');

// Input Values
const firstName = document.getElementById('firstname'),
  lastName = document.getElementById('lastname'),
  emailAddress = document.getElementById('email'),
  phoneNumber = document.getElementById('phonenumber'),
  password = document.getElementById('password'),
  confirmPassword = document.getElementById('confirm-password');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let isValidForm = false; //validateInputValues();
  if (isValidForm) {
    submissionStatus.classList.add('successMessage');
    submissionStatus.textContent = 'Registration succeed';
  } else {
    submissionStatus.classList.add('errorMessage');
    submissionStatus.textContent = 'Registration failed!';
  }

  setTimeout(() => {
    submissionStatus.classList.remove('errorMessage', 'successMessage');
  }, 1500);
});

function validateInputValues() {
    let inputValidationStatus = [];
    if (validateName(firstName.value)) {
        inputStatus(true, firstName);
        inputValidationStatus[0] = true;
    } else {
        inputStatus(false, firstName);
        inputValidationStatus[0] = false;
    }
}