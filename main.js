// Object Of Emails, Phones And Passwords Instead Of Database
let contactInfo = {
   Email: ["kerolos880_7@gmail.com", "soliman00_4@gmail.com", "pola33_p@gmail.com"],
   Phone: ["01212318011", "01224718831", "01201074744"],
   Passowrd: ["kero../k876", "Pola_ff34.", "KS87$#9l"]
}


let email = document.querySelector(".email");
let login = document.querySelector(".login-btn");
let password = document.querySelector(".password");
let form = document.querySelector("form");

// Check If The Email In Object After Submit
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
   
         else if (password.value.trim() === '') {
            errorDiv[1].textContent = "Password is required";
         }

         // Email Or Password Are Wrong
         else {
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
   
   create.addEventListener("click", _ => {
      const signPopUp = document.querySelector(".signup-popup");
      
      // Show The Signup Container
      signPopUp.style.cssText =
         "opacity: 1; \
         pointer-events: visible;";
      
      // Enable The Exit Button
      let exit = document.querySelector(".bx");
      exit.onclick = () => {
         signPopUp.style.cssText =
            "opacity: 0; \
            pointer-events: none;";
      }
   });
}
createAccount();


// Signup A New Account
function signup() {
   let fName = document.querySelector(".first-name");
   let lName = document.querySelector(".last-name");
   let newEmail = document.querySelector(".new-email");
   let newPass = document.querySelector(".new-password");
   let signBTN = document.querySelector(".signup")

   signBTN.addEventListener("click", (ev) => {
      ev.preventDefault()

      // Check If First And Last Name Are Empty Or Not
      let errorMessage = document.querySelectorAll(".signup-popup .error")
      
      if (fName.value.trim() === '')
         errorMessage[0].textContent = "First name is required";
      else if (lName.value.trim() === '')
         errorMessage[1].textContent = "First name is required";

      // Make Reg Exp To The Name
      // Make Reg Exp To The Email
   });


}
signup()