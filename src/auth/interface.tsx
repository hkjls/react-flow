import { useAuth } from "."
import { Workflow } from "../Workflow/Workflow"
import Auth from "./Auth";

const Interface=()=>{
    const {user, login} = useAuth()
    const name = user ? user.name : ""
    return (
        <>
            {user ?
            user.name == "Mohammed" && user.password == "admin" ? <Workflow/> 
            : <Auth/>
            : <Auth/>}
        </>
    )
}

export default Interface