import { Header } from "./Header"
import { useState } from "react";

export const Login = ()=>{
    const [IsSignInForm,setIsSignInForm] = useState(true);
    const toggleSigninForm = ()=>{
        setIsSignInForm(!IsSignInForm);
    };

    return (
        <div>
            <div className="absolute">
                <Header></Header>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_medium.jpg" alt=""></img>
            </div>
            <form className=" my-36 mx-auto right-0 left-0 w-3/12 absolute p-12 bg-black text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{IsSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!IsSignInForm ? <input type="text" placeholder="Full Name" className="w-full p-4 my-2 bg-gray-600"></input> : <div></div>}
                <input type="text" placeholder="Email Address" className="w-full p-4 my-2 bg-gray-600"></input>
                <input type="text" placeholder="Password" className="w-full p-4 my-2 bg-gray-600"></input>
                
                <button className="p-4 my-6  bg-red-700 w-full rounded-lg">{IsSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSigninForm}>{IsSignInForm ? "New to Netflix? Sign Up now" : "Already Registered Sign In Now"}</p>
            </form>
        </div>
        
    )
}