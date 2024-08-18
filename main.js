// Object Of Emails, Phones And Passwords Instead Of Database
let contactInfo = {
   Email: ["kerolos880_7@gmail.com", "soliman00_4@gmail.com", "pola33_p@gmail.com"],
   Phone: ["01212318011", "01224718831", "01201074744"],
   Passowrd: ["kero../k876", "Pola_ff34.", "KS87$#9l"]
}

// Check If The Email In Object After Submit
function checkInfo() {
   let email = document.querySelector(".email");
   let login = document.querySelector(".login-btn");
   let password = document.querySelector(".password");
   
   login.addEventListener("click", (ev) => {
      ev.preventDefault();

      // Check Email Info
      if (contactInfo["Email"].includes(email.value)) {
         console.log("Logged In Successfully");
      }

      else {
         console.log("Your Email Not Found. Create One!");
      }

      // Check Password Info
      if (contactInfo["Passowrd"].includes(password.value)) {
         console.log("Logged In Successfully");
      }

      else {
         console.log("Your Password Is Wrong");
      }
   });

   // Show Password Words
   let eyeIcon = document.querySelector("#eye-icon");
   eyeIcon.onclick = function () {
      if (password.type == "password") {
         password.type = "text";
         eyeIcon.src = "/img/eye.svg"
      }
      else {
         password.type = "password";
         eyeIcon.src = "/img/eye-slash.svg"
      }
   }
}

checkInfo();