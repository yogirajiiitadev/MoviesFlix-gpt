
export const checkValidData = (email, password, name, IsSignInForm) => {
    console.log(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(name);
    if(!isNameValid){
        if(!IsSignInForm){
            return "Invalid Name entered";
        }
    } 
    if(!isEmailValid) return "Emai ID is not Valid";
    if(!isPasswordValid) return "Password is not Valid";
    return null
};