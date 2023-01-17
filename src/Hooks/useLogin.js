import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        // console.log("EMAIL", email, password);
        setError(null);
        const responce = await fetch('http://localhost:7000/api/user/login', 
        {
        
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({ email, password })
        })
        const data =await responce.json();
        
        if(!responce.OK){
            setError(data.error)
        }
        if(responce.ok){
            // save user data in local storage
            localStorage.setItem("user",JSON.stringify(data))

            // update user Context
            dispatch({type:"LOGIN",payload:data})

        }
    }
        return {login,error}

}