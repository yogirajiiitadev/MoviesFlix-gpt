import { createBrowserRouter } from "react-router-dom"
import { Browse } from "./Browse"
import { RouterProvider } from "react-router-dom"
import { Login } from "./Login"

export const Body = ()=>{

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

    
    return(
        <div>
           <RouterProvider router={appRouter}>

           </RouterProvider>
        </div>
    )
}