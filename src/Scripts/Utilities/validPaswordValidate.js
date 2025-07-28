export default function validatePassword (password){
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < 8 ||!specialCharacter.test(password)) {
        return true;
    }
    return false;
}