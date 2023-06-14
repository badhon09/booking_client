import { createContext } from "react";

export const appContext = createContext()


export const AppContextProvider = ({children}) => {

    const storedUser = localStorage.getItem('user');
    let user = JSON.parse(storedUser);
    
    return (
        <appContext.Provider value={user}>
            {children}
        </appContext.Provider>
    )
}