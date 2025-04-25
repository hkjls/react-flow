import { createContext, ReactNode, useContext, useState } from "react";

type User = {
    name: string | undefined;
    role: string | undefined;
    password: string | undefined
}


type AuthContextType = {
    user: User | null;
    login:(user: User)=>void;
    time: Boolean | null;
    timeHandle:()=>void
}

type AppMode = {
    mode: "admin" | "student"
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider=({children}: {children: ReactNode})=>{
    const [user, setUser] = useState<User | null>(
        null
    )

    const [time, setTime] = useState<Boolean | null>(false)

    const login =(user:User)=>{
        setUser(user)
    }
    
    const timeHandle=()=>{
        setTime(!time)
    }

    return (
        <AuthContext.Provider value={{user, login, time, timeHandle}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}