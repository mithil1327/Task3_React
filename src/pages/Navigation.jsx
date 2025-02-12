import {useNavigate} from "react-router-dom"
import Button from "../components/Button";
export default function Navigation(){
    const navigate = useNavigate();
    return (
        
        <div>
        <Button name={"Login"} click={() => navigate("/")}/>
        </div>
    )
}