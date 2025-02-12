import { useNavigate} from "react-router-dom";
import useStore from "../store/store";

export default function Home(){
    const {username , password , setUsername , setPassword} = useStore();
    const navigate = useNavigate(); 
    const handlelogin=(e)=>{
        e.preventDefault();
        if(username==="ashwin"&&password==="admin"){
            navigate("/Data");
        }
        else{
            alert("Please enter password and username");
        }
    }
    return ( 
        <form onSubmit={handlelogin}>
        <><div>
            <input
                id="nm"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
        </div><div>
                <input
                    id="pw"
                    type="password"
                    placeholder="enter pass"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button id="Login" type="submit">Login</button></>
        </form>
    )
}