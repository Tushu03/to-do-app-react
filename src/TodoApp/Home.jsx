
import { Link } from "react-router-dom";
import {Button} from "@mui/material"

export function Home()
{
    return(
        <div className="container-fluid">
            <div className="card w-25 mx-auto bg-light text-dark" style={{boxShadow:'5px 5px 5px gray',height:'100px'}}>
                <div className="card-body">
                    
                    <Button variant="contained" color="warning" className="mx-2 ms-5 mt-2"><Link to='register' className="btn">Register</Link></Button>
                    <Button variant="contained" color="success" className=" mt-2 " ><Link to='login' className="btn">LOGIN</Link></Button>
                    
                </div>


            </div>
            

        </div>
    )
}