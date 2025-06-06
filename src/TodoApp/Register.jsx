import { Button, TextField} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";




export function Register() {

    let navigate = useNavigate()

    
    let formik = useFormik(
        {
            initialValues: {
                username: '',
                email: '',
                password: ''
            },
            onSubmit: (values) => {
                axios.post("http://127.0.0.1:4000/users", values)
                    .then((response) => {
                        console.log("Success:", response.data); // Debugging log
                        
                        navigate("/login")


                    })



            },
        });


    return (
        <div className="container-fluid">
            <motion.div
                className="container mx-auto w-25 bg-light text-black"
                style={{ height: "350px", boxShadow: "4px 4px 4px 4px gray", borderRadius: '10px' }}
                initial={{ opacity: 0, y: -50 }}  // Start position (faded out & above)
                animate={{ opacity: 1, y: 0 }}    // End position (fades in & moves down)
                transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
            >
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="text-center bi bi-person-fill"> Register </h1>
                    <TextField label="Enter Username" variant="outlined" fullWidth className="mt-1" onChange={formik.handleChange} required autoFocus name="username" />
                    <TextField label="Enter Email" type="email" variant="outlined" fullWidth className="mt-1" onChange={formik.handleChange} required name="email" /><br />
                    <TextField label="Enter Password" type="password" variant="outlined" fullWidth className="mt-1" onChange={formik.handleChange} required name="password" /><br />
                    <Button type="submit" variant="contained" fullWidth color="warning" className="mt-4 mb-1">
                        Register
                    </Button>
                    <span>Already have an account <Link to="/login">Click here?</Link></span>


                </form>

            </motion.div>
            
        </div>

    );
}
