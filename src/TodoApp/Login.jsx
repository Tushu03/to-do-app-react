import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


export function Login() {
    const [cokkies,setCookies,removeCookies] = useCookies(['username']);
    let navigate=useNavigate();
    

    let formik=useFormik(
        {
            initialValues: {
                username: '',
                password: ''
            },
            onSubmit: (values) => 
            {
                axios.get(`http://127.0.0.1:4000/users`)
                .then(response =>
                {
                    let userDeatails=response.data.find(user => user.username===values.username)
                    if(userDeatails)
                    {
                        if(userDeatails.password===values.password)
                        {
                            alert('Login successful')
                            setCookies('username', values.username, { expires: new Date(Date.now() + 60 * 60 * 1000) }) // Expires after 1 hour
                            navigate('/dashboard');
                           
                            
                        }
                        else
                        {
                            alert("Invalid Password")
                        }
                    }
                    else{
                        alert("User not found")
    
                    }
                        
                    

                }
                )
                
            }
        }
    )

    return (
        <div className="container-fluid">
            <motion.div
                className="container mx-auto w-25 bg-light text-dark"
                style={{ height: "250px", boxShadow: "4px 4px 4px 4px gray", borderRadius:'10px'}}
                initial={{ opacity: 0, y: -50 }}  // Start position
                animate={{ opacity: 1, y: 0 }}    // End position
                transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
            >
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="text-center bi bi-person-fill"> Login </h1>
                    <TextField label="Enter Username" fullWidth onChange={formik.handleChange} name="username" variant="standard" required autoFocus />
                    <TextField label="Enter Password" fullWidth  onChange={formik.handleChange} type="password" name="password" variant="standard" required /><br />
                    <Button type="submit" variant="contained" fullWidth color="success" className="mt-4 mb-1">Login
                        
                    </Button><br/>
                    <span>Don't have an account <Link to="/register">New user?</Link></span>

                </form>

            </motion.div>
        </div>
    );
}
