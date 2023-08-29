var myForm = document.getElementById("myForm");
var submitButton = document.getElementById("submitButton");
myForm.onsubmit = validateForm; 

function focusOnError(inputElement, errorMessage) {
  inputElement.classList.add('error1');
  inputElement.focus();
  errorMessage.textContent = '';
}
// Validation for the Full Name field
function fullNameValidate() {
    let fullName = document.getElementById("fullName");
    let fullNameError = document.getElementById("fullNameError");
    let fullNameValue = fullName.value.trim();
    let fullNameRegex = /^[a-zA-Z ]{8,64}$/;
  
    if (!fullNameRegex.test(fullNameValue)) {
      focusOnError (fullName, fullNameError);
      fullNameError.textContent = "Full name must be 8 to 64 letters long and contain only letters and spaces.";
      return false;
    } else {
      fullNameError.textContent = '';
      fullName.classList.remove('error1');
      return true;
    }

}

// Validation for the Email field
function emailValidate() {
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailValue = email.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(emailValue)) {
      focusOnError (email, emailError);
      emailError.textContent = 'Please enter a valid email address.';
      return false;
    } else {
      emailError.textContent = '';
      email.classList.remove('error1');
      return true;
    }
}

// Validation for the Password field
function passwordValidate() {
    let password = document.getElementById("password");
    let passwordError = document.getElementById("passwordError");
    let passwordValue = password.value.trim();
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(passwordValue)) {
      focusOnError (password, passwordError);
      passwordError.textContent = 'Password must be 8 to 64 letters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
      return false;
    } else {
      passwordError.textContent = '';
      password.classList.remove('error1');
      return true;
    }
}

// Validation for the Confirm Password field
function confirmPasswordValidate() {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let confirmPasswordError = document.getElementById("confirmPasswordError");
    let confirmPasswordValue = confirmPassword.value.trim();
  
    if (password.value.trim() !== confirmPasswordValue) {
      focusOnError (confirmPassword, confirmPasswordError);
      confirmPasswordError.textContent = "Passwords do not match.";
      return false;
    } else {
      confirmPasswordError.textContent = '';
      confirmPassword.classList.remove('error1');
      return true;
    }
}

// Validation for the Phone Number field
function phoneNumberValidate() {
    let phoneNumber = document.getElementById("phoneNumber");
    let phoneNumberError = document.getElementById("phoneNumberError");
    let phoneNumberValue = phoneNumber.value.trim();
    let phoneNumberRegex = /^(010|011|012|015)\d{8}$/;
  
    if (!phoneNumberRegex.test(phoneNumberValue)) {
      focusOnError (phoneNumber, phoneNumberError);
      phoneNumberError.textContent = "Invalid phone number. Please enter a valid phone number starting with 010, 011, 012, or 015, and containing 8 digits.";
      return false;
    } else {
      phoneNumberError.textContent = '';
      phoneNumber.classList.remove('error1');
      return true;
    }
}

// Validation for the Address field
function addressValidate() {
    let address = document.getElementById("address");
    let addressError = document.getElementById("addressError");
    let addressValue = address.value.trim();
    let addressRegex = /^(?=.*[a-zA-Z0-9\s]{8,}).*$/;
  
    if (!addressRegex.test(addressValue)) {
      focusOnError (address, addressError);
      addressError.textContent = "Invalid address. Please enter an address.";
      return false;
    } else {
      addressError.textContent = '';
      address.classList.remove('error1');
      return true;
    }
}

// Validation for the City field
var selectElement = document.getElementById("citySelect");
var cities = [
    "Cairo",
    "Giza",
    "Alexandria",
    "Shubrā al Khaymah",
    "Ḩalwān",
    "Al Maḩallah al Kubrá",
    "Ţanţā",
    "Asyūţ",
    "Al Fayyūm",
    "Az Zaqāzīq",
    "Al ‘Ajamī",
    "Kafr ad Dawwār",
    "Damanhūr",
    "Al Minyā",
    "Mallawī",
    "Damietta",
    "Qinā",
    "Banī Suwayf",
    "Shibīn al Kawm",
    "Banhā",
    "Kafr ash Shaykh",
    "Disūq",
    "Mīt Ghamr",
    "Munūf",
    "Fāqūs",
    "Qalyūb",
    "Jirjā",
    "Akhmīm",
    "Al Badrashayn",
    "Al Khānkah",
    "‘Izbat al Burj",
    "Kirdāsah",
    "Abnūb",
    "Al Minshāh",
    "Al Qurayn",
    "Al Balyanā",
    "Al ‘Ayyāţ",
    "Al Badārī",
    "Kafr al Kurdī",
    "Abū Qīr",
    "Al Karnak",
    "Mīt Namā",
    "Banī Murr",
    "Al Madāmūd",
    "Birqāsh",
    "Kafr Ţaḩlah",
];

cities.sort();
var cityOptionsHTML = "";
cityOptionsHTML += `<option value="" disabled selected>Select City</option>`;
for (let city of cities) {
    cityOptionsHTML += `<option value="${city}">${city}</option>`;
}

selectElement.innerHTML = cityOptionsHTML;
var citySelectOptionError = document.getElementById("citySelectOptionError");


function validateSelect() {
    isValid = selectElement.value !== "";

    if (isValid) {
        citySelectOptionError.textContent = '';
        return true;
    } else {
        citySelectOptionError.textContent = 'Please select a city';
        return false;
    }
}

// Validation for the Gender field
var generSelect = document.getElementById("genderField");
var genders = [
    "Male",
    "Female",
];

var genderOptionsHTML = "";
genderOptionsHTML += `<option value="" disabled selected>Select Gender</option>`;
for (let gender of genders) {
    genderOptionsHTML += `<option value="${gender}">${gender}</option>`;
} 

generSelect.innerHTML = genderOptionsHTML;
var genderFieldError = document.getElementById("genderFieldError");


function validateGender() {
    if (generSelect.value === "") {
        genderFieldError.textContent = 'Please select a gender';
        return false;
    } else {
        genderFieldError.textContent = '';
        return true;
    }
}

// Validation for the Date of Birth field
function dobValidate() {
    let dob = document.getElementById('dobField').value;
    let dobError = document.getElementById('dobError');
    let currentYear = new Date().getFullYear();
    let dobYear = new Date(dob).getFullYear();
  
    if (currentYear - dobYear > 100 || currentYear - dobYear < 18 || dob === '') {
      dobError.textContent = 'Please enter a valid date of birth, Age must be between 18 and 100.';
        return false;
    } else {
      dobError.textContent = '';
      return true;
    }
}

// Validation for the Profile Picture field
function profilePictureValidate() {
  let profilePicture = document.getElementById('profilePic');
  let profilePictureError = document.getElementById('profilePicError');
  let profilePictureValue = profilePicture.value.trim();
  let maxSize = 25 * 1024 * 1024; // 25MB in bytes
  let validExtensions = ['jpg', 'jpeg', 'png', 'gif'];

  let fileExtension = profilePictureValue.split('.').pop().toLowerCase();
  if (!validExtensions.includes(fileExtension) || profilePictureValue === '') {
    profilePictureError.textContent = 'Please upload a valid image file (jpg, jpeg, png, gif).';
    return false;
  }
  let file = profilePicture.files[0];
  if (file.size !== 0 && file.size > maxSize) {
    profilePictureError.textContent = 'The image size should not exceed 25MB.';
    return false;
  }
  
  profilePictureError.textContent = '';
  return true;
}

// Validation for the Payment Details field
function cardNumberValidate() {
    let cardNumber = document.getElementById('cardNumber').value.trim();
    let cardNumberError = document.getElementById('cardNumberError');
  
    if (cardNumber.length !== 16) {
      cardNumberError.textContent = 'Please enter a valid card number, start with 4 or 5 and contain 16 digits only.';
      return false;
    }
  
    let firstDigit = cardNumber.charAt(0);
    let validStartsWith = ['4', '5'];
  
    if (!validStartsWith.includes(firstDigit)) {
      cardNumberError.textContent = 'Please enter a valid card number, start with 4 or 5 and contain 16 digits only.';
      return false;
    }
  
    cardNumberError.textContent = '';
    return true;
}  

// Validation for Card CVV field
function cvvValidate() {
  let cvv = document.getElementById('cardCVV').value.trim();
  let cvvError = document.getElementById('cardCVVError');

  if (!/^\d{3,4}$/.test(cvv)) {
    cvvError.textContent = 'Please enter a valid CVV number 3-4 digits.';
    return false;
  }

  cvvError.textContent = '';
  return true;
}
// Validation for Expiry Date field
var expiryDateField = document.getElementById("expiryDate");
var expiryDateError = document.getElementById("expiryDateError");

function validateExpiryDate() {
    var currentYear = new Date().getFullYear();

    var expiryDate = expiryDateField.value;
    var yearPattern = /\d{4}/;
    var yearMatch = expiryDate.match(yearPattern);

    if (yearMatch) {
        var year = parseInt(yearMatch[0]);
        if (year >= currentYear && year <= currentYear + 6) {
            expiryDateError.textContent = '';
            return true;
        }
    }
    expiryDateError.textContent = 'Invalid expiry date format. Maximum 6 years from current.';
    return false;
}

// Form Validations
function validateForm() {
  let fullNameValid = fullNameValidate();
  let emailValid = emailValidate();
  let passwordValid = passwordValidate();
  let confirmPasswordValid = confirmPasswordValidate();
  let phoneNumberValid = phoneNumberValidate();
  let addressValid = addressValidate();
  let isCitySelectedValid = validateSelect();
  let generValid = validateGender();
  let dobValid = dobValidate();
  let profilePictureValid = profilePictureValidate();
  let cardNumberValid = cardNumberValidate();
  let cvvValid = cvvValidate();
  let expiryDateValid = validateExpiryDate();

  if (fullNameValid && emailValid && passwordValid && confirmPasswordValid
     && phoneNumberValid && addressValid && dobValid && profilePictureValid 
     && isCitySelectedValid && generValid && cardNumberValid && cvvValid && expiryDateValid) {
    return true;
  } else {
    return false;
  }
}
 