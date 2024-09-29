import { createBrowserRouter } from "react-router-dom"
import { Browse } from "./Browse"
import { RouterProvider } from "react-router-dom"
import { Login } from "./Login"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom"

export const Body = ()=>{
    const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])

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
            }
            else{
                // User is Signed Out
                dispatch(removeUser());
            }
        })
    },[])

    return(
        <div>
           <RouterProvider router={appRouter}>

           </RouterProvider>
        </div>
    )
}