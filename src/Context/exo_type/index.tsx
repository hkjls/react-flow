import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";

type test_choice = {
    choice: string,
    handleChoice:(c:string)=>void
}

const TestContext = createContext<any>(undefined)

export const TestProvider=({children}:{children: ReactNode})=>{

    const [userChoice, setUserChoice] = useState<string>("free")
    const [userName, setUserName] = useState<string | null>(null)
    const [userFirstName, setUserFirstName] = useState<string | null>(null)

    const [laps, setLaps] = useState<string | null | undefined>(null)
    const [mistake, setMistake] = useState<string | null | undefined>(null)
    const [correct, setCorrect] = useState<string | null>(null)
    const [mountEdge, setMountEdge] = useState<number | null>(null)
    const [activeAlert, setActiveAlert] = useState<number>(180)
    const [pannelS, setPannelS] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("La limite d'erreur atteinte")

    const test_choice:test_choice = {
        choice: userChoice,
        handleChoice:(c:string)=>{
            setUserChoice(c)
        }
    }

    const user=(userName:string, userFirstName:string):void=>{
        setUserName(userName)
        setUserFirstName(userFirstName)
    }

    const result=():void=>{
        var t = document.getElementById("lapsTime")
        setLaps(t?.textContent)
    }

    return(
        <TestContext.Provider value={
            {
                test_choice, 
                userName,
                userFirstName,
                laps,
                mistake,
                correct,
                mountEdge,
                activeAlert,
                pannelS,
                message,
                user,
                result,
                setMistake,
                setCorrect,
                setMountEdge,
                setActiveAlert,
                setPannelS,
                setMessage
            }
        }>
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