// Object Of Emails, Phones And Passwords Instead Of Database
let contactInfo = {
   Email: ["kerolos880_7@gmail.com", "soliman00_4@gmail.com", "pola33_p@gmail.com"],
   Phone: ["01212318011", "01224718831", "01201074744"],
   Passowrd: ["kero../k876", "Pola_ff34.", "KS87$#9l"],
   FirstName: [],
   LastName: [],
   DayOfBirth: [],
   MonthOfBirth: [],
   YearOfBirth: [],
   Gender: []
}

// Remove Repeated Values
function removeRepeatedValues() {
   let keys = Object.keys(contactInfo);
   for (let i = 0; i < keys.length; i++){
      if (keys[i] !== "Passowrd") {
         console.log(Array.from(new Set(contactInfo[keys[i]])))
      }
   }
}


// Check If The Email In Object After Submit
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
   ev.preventDefault();

   // Check Email And Password Info
   const errorDiv = document.querySelectorAll(".error");

   if (contactInfo["Email"].includes(email.value) && contactInfo["Passowrd"].includes(password.value)) {
      console.log("Logged In Successfully");
      errorDiv[0].textContent = '';
      errorDiv[1].textContent = '';
   }

   else {
      // // Check If The Email Or Password Is Empty Or Wrong
      if (!contactInfo["Email"].includes(email.value) || email.value.trim().length === 0){
         errorDiv[0].textContent = "Email is wrong"
      }

      if (!contactInfo["Passowrd"].includes(password.value) || password.value.trim().length === 0){
         errorDiv[1].textContent = "Password is wrong"
      }
   }
});

// Show Password Words
const eyeIcon = document.querySelector("#eye-icon");
eyeIcon.onclick = function () {
   if (password.type == "password") {
      password.type = "text";
      eyeIcon.src = "/img/eye.svg";
   }
   else {
      password.type = "password";
      eyeIcon.src = "/img/eye-slash.svg";
   }
}

/******************************************************/
const create = document.querySelector(".signup-btn");
const loginContainer = document.querySelector(".login")
const signPopUp = document.querySelector(".signup-popup");

// Create A New Account
create.addEventListener("click", _ => {
   // Disable The Login Conatiner
   loginContainer.style.pointerEvents = "none";
   
   // Show The Signup Container
   signPopUp.style.cssText =
      "opacity: 1; \
      pointer-events: visible;";
});

// Enable The Exit Button
const exit = document.querySelector(".bx");
exit.onclick = ("click", _=>{
   signPopUp.style.cssText =
      "opacity: 0; \
      pointer-events: none;";
   
   // Enable The Login Container
   loginContainer.style.pointerEvents = "visible";
});


// Signup A New Account
const fName = document.querySelector(".first-name");
const lName = document.querySelector(".last-name");
const newEmail = document.querySelector(".new-email");
const signBTN = document.querySelector(".signup");
const newPass = document.querySelector(".new-password");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");

signBTN.addEventListener("click", (ev) => {
   ev.preventDefault()

   // Make Flags To Submit The Correct Data
   let firstNameFlag = false, lastNameFlag = false, emailFlag = false, passFlag = false;

   // Make Name Validation
   let errorSign = document.querySelectorAll(".signup-popup .error")
   let fnameValueObject = [];
   let lnameValueObject = [];

   // First Name Validation
   for (let i = 0; i < fName.value.trim().length; i++){
      if (isNaN(Number(fName.value[i]))) {
         errorSign[0].textContent = ''
         fnameValueObject.push(fName.value[i]);
         firstNameFlag = true;
         continue;
      }
      else {
         errorSign[0].textContent = "Your name must contains only letters"
         fnameValueObject.forEach(_ => fnameValueObject.pop());
         firstNameFlag = false;
         break;
      }
   }
   fnameValueObject.join('');

   if (fName.value.trim().length === 0) {
      errorSign[0].textContent = "Your name must contains only letters";
      firstNameFlag = false;
   }

   // Last Name Validation
   for (let i = 0; i < lName.value.trim().length; i++){
      if (isNaN(Number(lName.value[i]))) {
         errorSign[1].textContent = ''
         lnameValueObject.push(lName.value[i]);
         lastNameFlag = true;
         continue;
      }
      else {
         errorSign[1].textContent = "Your name must contains only letters"
         lnameValueObject.forEach(_ => lnameValueObject.pop());
         lastNameFlag = false;
         break;
      }
   }
   lnameValueObject.join('');

   if (lName.value.trim().length === 0) {
      errorSign[1].textContent = "Your name must contains only letters"
      lastNameFlag = false;
   }

// =========================================
   // Make Email Validation
   let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   
   if (emailReg.test(newEmail.value.trim())){
      errorSign[2].textContent = '';
      emailFlag = true;
   }
   else {
      errorSign[2].textContent = "Email is not valid";
      emailFlag = false;
   }

// =========================================
   // Make New Password Minimum Length
   if (newPass.value.length < 5) {
      errorSign[3].textContent = "Password must be more than 5 letters";
      passFlag = false;
   }
   else {
      errorSign[3].textContent = '';
      passFlag = true;
   }

// =========================================
   // Get The Date Of Birth
   let dayValue = day.options[day.selectedIndex].value
   let monthValue = month.options[month.selectedIndex].value
   let yearValue = year.options[year.selectedIndex].value

   contactInfo["DayOfBirth"].push(dayValue);
   contactInfo["MonthOfBirth"].push(monthValue);
   contactInfo["YearOfBirth"].push(yearValue);

   // Upload The Correct Data

   function readyToSignUP() {
      if (firstNameFlag && lastNameFlag && emailFlag && passFlag) {
         contactInfo["FirstName"].push(localStorage["LastName"]);
         contactInfo["LastName"].push(localStorage["FirstName"]);
         contactInfo["Email"].push(localStorage["Email"]);
         contactInfo["Passowrd"].push(localStorage["Password"]);
         removeRepeatedValues();

         signPopUp.style.cssText =
            "opacity: 0; \
            pointer-events: none;";
         loginContainer.style.pointerEvents = "visible";
      }
   }
   readyToSignUP();
});

// =========================================
// Password Suggetion
const SuggestBtn = document.querySelector(".suggest");

SuggestBtn.onclick = function (ev) {
   ev.preventDefault();
   
   const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!\"#$%&'()*+,-./";
   let passwordSuggestion = "";
   
   for (let i = 0; i < 15; i++){
      let charIndex = Math.floor(Math.random() * characters.length);
      passwordSuggestion += characters[charIndex];
   }

   // Put The Result To Password Field
   const newPass = document.querySelector(".new-password");
   newPass.value = passwordSuggestion;
}


// Show Password Words
const eye = document.querySelector(".npass #eye-icon");
eye.onclick = function () {
   if (newPass.type == "password") {
      newPass.type = "text";
      eye.src = "/img/eye.svg";
   }
   else {
      newPass.type = "password";
      eye.src = "/img/eye-slash.svg";
   }
}

// =========================================
// Get The Gender
const maleGender = document.querySelector("#male");
const femaleGender = document.querySelector("#female");

maleGender.onclick = function () {
   contactInfo["Gender"].push(maleGender.value);
}

femaleGender.onclick = function () {
   contactInfo["Gender"].push(femaleGender.value);
}

// =========================================
console.log(contactInfo["Email"]);
console.log(contactInfo["Passowrd"]);
console.log(contactInfo["FirstName"]);
console.log(contactInfo["LastName"]);