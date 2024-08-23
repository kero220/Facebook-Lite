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
const login = document.querySelector(".login-btn");
const password = document.querySelector(".password");
const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
   ev.preventDefault();

   // Check Email And Password Info
   if (contactInfo["Email"].includes(email.value) && contactInfo["Passowrd"].includes(password.value)) {
      console.log("Logged In Successfully");
   }

   else {
      // Check If The Email Or Password Is Empty Or Not
      const errorDiv = document.querySelectorAll(".error");
      
      if (email.value.trim() === '') {;
         errorDiv[0].textContent = "Email is required";
      }

      if (email.value) {;
         errorDiv[0].textContent = "";
      }

      if (password.value.trim() === '') {
         errorDiv[1].textContent = "Password is required";
      }

      if (password.value) {
         errorDiv[1].textContent = "";
      }

      // Email Or Password Are Wrong
      if (!(contactInfo["Email"].includes(email.value) && contactInfo["Passowrd"].includes(password.value))) {
         console.log("Email or password is wrong");
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
const fName = document.querySelector(".first-name");
const lName = document.querySelector(".last-name");
const newEmail = document.querySelector(".new-email");
const newPass = document.querySelector(".new-password");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const maleGender = document.querySelector("#male");
const femaleGender = document.querySelector("#female");
const signBTN = document.querySelector(".signup");

// Create A New Account
create.addEventListener("click", _ => {
   // Disable The Login Conatiner
   loginContainer.style.pointerEvents = "none";
   
   // Show The Signup Container
   const signPopUp = document.querySelector(".signup-popup");
   
   signPopUp.style.cssText =
      "opacity: 1; \
      pointer-events: visible;";
   
   // Enable The Exit Button
   let exit = document.querySelector(".bx");
   exit.onclick = () => {
      signPopUp.style.cssText =
         "opacity: 0; \
         pointer-events: none;";
      
      // Enable The Login Container
      loginContainer.style.pointerEvents = "visible";
   }
});


// Signup A New Account
signBTN.addEventListener("click", (ev) => {
   ev.preventDefault()

   // Make Name Validation
   let errorSign = document.querySelectorAll(".signup-popup .error")
   let fnameValueObject = [];
   let lnameValueObject = [];

   // First Name Validation
   for (let i = 0; i < fName.value.trim().length; i++){
      if (isNaN(Number(fName.value[i]))) {
         errorSign[0].textContent = ''
         fnameValueObject.push(fName.value[i]);
         continue;
      }
      else {
         errorSign[0].textContent = "Your name must contains only letters"
         fnameValueObject.forEach(_ => fnameValueObject.pop());
         break;
      }
   }

   if (fName.value.trim().length === 0)
      errorSign[0].textContent = "Your name must contains only letters"
   
   // Push First Name To The Object
   // contactInfo["first-name"].push(fnameValueObject);
   // console.log(contactInfo["first-name"]);
   
   // Last Name Validation
   for (let i = 0; i < lName.value.trim().length; i++){
      if (isNaN(Number(lName.value[i]))) {
         errorSign[1].textContent = ''
         lnameValueObject.push(lName.value[i]);
         continue;
      }
      else {
         errorSign[1].textContent = "Your name must contains only letters"
         lnameValueObject.forEach(_ => lnameValueObject.pop());
         break;
      }
   }

   if (lName.value.trim().length === 0)
      errorSign[0].textContent = "Your name must contains only letters"
   
   // Push Last Name To The Object
   // contactInfo["last-name"].push(lnameValueObject);
   // console.log(contactInfo["last-name"]);


   // Make Email Validation
   let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   
   if (emailReg.test(newEmail.value.trim())){
      // Add The New Email To The Object
      contactInfo["Email"].push(newEmail.value);
      removeRepeatedValues();
      errorSign[2].textContent = '';
   }
   else {
      errorSign[2].textContent = "Email is not valid";
   }


   // Make New Password Minimum Length
   if (newPass.value.length < 5) {
      errorSign[3].textContent = "Password mustn't be less than 5 letters";
   }
   else {
      errorSign[3].textContent = '';
      contactInfo["Passowrd"].push(newPass.value);
   }


   // Get The Date Of Birth
   let dayValue = day.options[day.selectedIndex].value
   let monthValue = month.options[month.selectedIndex].value
   let yearValue = year.options[year.selectedIndex].value

   contactInfo["DayOfBirth"].push(dayValue);
   contactInfo["MonthOfBirth"].push(monthValue);
   contactInfo["YearOfBirth"].push(yearValue);
});


// Get The Gender
maleGender.onclick = function () {
   contactInfo["Gender"].push(maleGender.value)
   console.log(contactInfo["Gender"])
}

femaleGender.onclick = function () {
   contactInfo["Gender"].push(femaleGender.value)
}


// Password Suggetion
const SuggestBtn = document.querySelector(".suggest");

SuggestBtn.onclick = function (ev) {
   ev.preventDefault()
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


// check that all parameters true to sign up