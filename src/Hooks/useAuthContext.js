import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
export const useAuthContext =() =>{
    const Context=useContext(AuthContext);
    if(!Context){
        throw Error("UseAuth cannot be used")
    }
    return Context;
    
}