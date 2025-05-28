import { useState } from "react";
import { useCookies } from "react-cookie";

export function Cookies()
{
    const [username,setUsername]=useState('');
    const [cokkies,setCookies,removeCookies] = useCookies(['username']);

    function handleUser(e)
    {
        setUsername(e.target.value);
    }

    function SignInClick()
    {
        setCookies('username',username, {expires : new Date('2025-03-09')}); //here if we define a cookie with expires it will be persistent cookie otherwis its an inmemory cookie(temporary cookie)
        
    }

    function SignOutClick()
    {
        removeCookies('username');
    }

    return(
        <div className="container-fluid">
            <nav className="nav d-flex justify-content-between bg-dark text-white h-25">
                <h2 className="nav-brand ms-1">YouTube.com</h2>
               
               <div>
                {
                   (cokkies['username']===undefined)
                   ?
                   <div className="input-group my-1">
                    <input type="text" className="form-control" onChange={handleUser} placeholder="Enter UserName"></input>
                        <button className="btn btn-warning bi bi-person-fill" onClick={SignInClick}>Sign in</button>
                    </div>
                    :
                    <div>
                        
                        <button className="btn btn-danger bi bi-person" onClick={SignOutClick}>Sign out</button>
                        <span className="mx-2">Hello, {username}</span>
                    </div>

                }
                    
               </div>
               

            </nav>
        </div>
       
    )







}