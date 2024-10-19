import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_mfix, LOGO_avatar } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

export const Header2 = ()=>{
    const dispatch = useDispatch()
    const navigate = useNavigate();

    function handleSignOut(){
        signOut(auth).then(() => {
            navigate("/");
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                // User is Signing up (immediatedly Signs In)
                // User is Signing In
                const {uid, email, displayName} = user;
                dispatch(addUser({
                    uid : uid,
                    email : email,
                    displayName : displayName
                }));
                navigate("/browse");
            }
            else{
                // User is Signed Out
                dispatch(removeUser());
                navigate("/");
            }
        })
    },[]);

    const handleGPTSearchClick = () =>{
        // Toggle GPT Search button
        //navigate("/gpt");
        dispatch(toggleGptSearchView());
    }

    const showGptSearchView = useSelector(state => state.gpt.showGptSearch);

    return(
        <div className="flex justify-between absolute px-2 py-2 bg-gradient-to-b from black z-10 shadow-2xl w-full bg-black h-22">
            <img
            className="w-40 h-20"
            src={LOGO_mfix} alt=""></img>
            <div className="flex p-2">
                <button onClick={handleGPTSearchClick} className="py-2 px-4 mx-4 my-2 bg-purple-900 text-white font-bold rounded-lg">{!showGptSearchView ? "GPT Search" : "Home"}</button>
                <img className="mt-2 w-12 h-12 " src={LOGO_avatar} alt=""></img>
                <button onClick={handleSignOut} className="px-2 font-bold text-white">(Sign Out)</button>
            </div>
        </div>
    )
}