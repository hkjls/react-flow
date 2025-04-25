import { createContext, ReactNode, useContext, useState } from "react";

type test_choice = {
    choice: string,
    handleChoice:(c:string)=>void
}

const TestContext = createContext<test_choice | undefined>(undefined)

export const TestProvider=({children}:{children: ReactNode})=>{

    const [userChoice, setUserChoice] = useState<string>("free")

    const test_choice:test_choice = {
        choice: userChoice,
        handleChoice:(c:string)=>{
            setUserChoice(c)
        }
    }
    return(
        <TestContext.Provider value={test_choice}>
            {children}
        </TestContext.Provider>
    )
}

export const useTest=()=>{
    const context = useContext(TestContext);
    if (!context){
        throw new Error("TestContext must be used within a TestProvider")
    }
    return context
}