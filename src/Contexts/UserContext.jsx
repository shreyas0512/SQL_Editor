import { createContext, useContext,useState } from "react";
//create a context for the role of user

const UserContext=createContext();
export const UserContextProvider =({children})=>{
    const[role,setRole]=useState("");
    return(
        <UserContext.Provider value={({role,setRole})}>
            {children}
        </UserContext.Provider>
    )
}

export const UserRole =()=>{
    return useContext(UserContext);
}