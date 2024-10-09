import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { LOGO_mfix, LOGO_avatar } from "../utils/constant";

export const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
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
        });
        // Unsubscrbe when the component unmounts
        return ()=>{
            unsubscribe();
        }
    },[])
    return(
        <div className="absolute px-2 py-2 bg-gradient-to-b from black z-10 shadow-lg">
            <img
            className="w-44"
            src={LOGO_mfix} alt=""></img>
        </div>
    )
}