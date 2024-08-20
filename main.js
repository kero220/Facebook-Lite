// Object Of Emails, Phones And Passwords Instead Of Database
let contactInfo = {
   Email: ["kerolos880_7@gmail.com", "soliman00_4@gmail.com", "pola33_p@gmail.com"],
   Phone: ["01212318011", "01224718831", "01201074744"],
   Passowrd: ["kero../k876", "Pola_ff34.", "KS87$#9l"]
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
let email = document.querySelector(".email");
let login = document.querySelector(".login-btn");
let password = document.querySelector(".password");
let form = document.querySelector("form");

function checkInfo() {
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
}

checkInfo();


// Create A New Account
function createAccount() {
   const create = document.querySelector(".signup-btn");
   const loginContainer = document.querySelector(".login")

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
}
createAccount();


// Signup A New Account
function signup() {
   let fName = document.querySelector(".first-name");
   let lName = document.querySelector(".last-name");
   let newPass = document.querySelector(".new-password");
   let signBTN = document.querySelector(".signup")

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
      // Push Last Name To The Object
      // contactInfo["last-name"].push(lnameValueObject);
      // console.log(contactInfo["last-name"]);

      // Make Email Validation
      let newEmail = document.querySelector(".new-email");
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
   });
}
signup()

// make new password
// add password to object
// get date birth and gender
// add date and gender to object
// get back the old password when forget