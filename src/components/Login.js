import { Header } from "./Header"
import { useRef, useState } from "react";
import {checkValidData} from "../utils/validate";

export const Login = ()=>{
    const [IsSignInForm,setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [ErrorMessage, setErrorMessage] = useState("");

    const toggleSigninForm = ()=>{
        setIsSignInForm(!IsSignInForm);
    };

    const handleButtonClick = () =>{
        // Validate form data
        const error_msg = checkValidData(email.current.value, password.current.value, name.current.value);
        setErrorMessage(error_msg);


    }

    return (
        <div>
            <div className="absolute">
                <Header></Header>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg" alt=""></img>
            </div>
            <form onSubmit={(e)=> {e.preventDefault()}} className=" my-36 mx-auto right-0 left-0 w-3/12 absolute p-12 bg-black text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!IsSignInForm ? <input ref={name} type="text" placeholder="Full Name" className="w-full px-4 py-2 my-2 bg-gray-600"></input> : <div></div>}
                <input ref={email} type="text" placeholder="Email Address" className="w-full px-4 py-2 my-2 bg-gray-600"></input>
                <input ref={password} type="text" placeholder="Password" className="w-full px-4 py-2 my-2 bg-gray-600"></input>
                <p className="text-red-500 pt-2 font-bold">{ErrorMessage}</p>
                <button onClick={handleButtonClick} className="p-4 my-6  bg-red-700 w-full rounded-lg">{IsSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{IsSignInForm ? "New to Netflix? Sign Up now" : "Already Registered Sign In Now"}</p>
            </form>
        </div>
        
    )
}