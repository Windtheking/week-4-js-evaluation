import generateSHA256 from "./Utilities/Hash_generator.js";
import EmptyFields from "./Utilities/EmptyValidation.js";
import isEmail from "./Utilities/EmailValidation.js";
import users_controller from "./users_controller.js";

if (localStorage.getItem("Useremail") !== null) {
    window.location.href = "http://127.0.0.1:5500/src/pages/practice_register.html"
}


document.getElementById("loginForm").addEventListener("submit", async (event) => {     
    event.preventDefault();                                                     //Preventing default behaviour (reolad)
    // const nickName = document.getElementById("nickName").value;                     //Recovering DOM values
    const Email = document.getElementById("Email").value;                            //Recovering DOM values
    const passWord = document.getElementById("Password").value;                     //Recovering DOM values


    const passWordHash = generateSHA256(passWord)
    // const confirmPwdHash = generateSHA256(ConfirmPassword)
    console.log(passWordHash)
    // console.log(confirmPwdHash)

    // Verifications of values

    //verification of null
    if (Email === null) {
        alert(`Null value detected email`); 
        return;
    };
    if (passWord === null){ 
        alert(`Null value detected in password`);
        return;
    };


    // Verification of not valid values
    //empty fields
    if(EmptyFields({Email,passWord})){//Email,ConfirmPassword
        alert("All domains must be filled")
        return;
    };
    // empty email
    if(!isEmail(Email)){
        alert("Please insert a valid email")
        return;
    };
    
    const prom = await users_controller.getUsers()
    const foundUsser = prom.find((user) => user.Email === Email && user.passWordHash === passWordHash)
    if(!foundUsser){
        alert("Unexistent usser or incorrect credentials")
        return;
    }


    localStorage.setItem("Useremail", foundUsser.Email)
    alert("bienvenido")
    window.location.href = "http://127.0.0.1:5500/src/pages/dashboard.html"
    
    
});


document.getElementById("logoutBtn").addEventListener("click", () =>{

});
