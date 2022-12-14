import { createContext } from "react";

const initialState = {
    user:'',
    pass:''
}

export const UserContext = createContext(initialState);

export const ContextProvider = ({children})=>{


    return(
        <UserContext.Provider value={{...initialState}}>
            {children}
        </UserContext.Provider>
    )
}