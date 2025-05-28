
import { Button, InputLabel, TextField} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
export function AddApp() {
    const [cokkies, setCookies, removeCookies] = useCookies(['username']);

    let navigate = useNavigate();
    let formik = useFormik(
        {
            initialValues: {                
                title: '',
                date: '',
                username: cokkies['username'],
            },
            onSubmit: (values) => {
                axios.post("http://127.0.0.1:4000/appointements", values)
                    .then((response) => {
                        console.log("Success:", response.data); // Debugging log
                        
                        navigate("/dashboard")


                    })



            },
        });



    return (

        <div className="container-fluid">
            <motion.div
                className="container mx-auto w-25 bg-light text-black"
                style={{ height: "370px", boxShadow: "4px 4px 4px 4px gray", borderRadius: '10px' }}
                initial={{ opacity: 0, y: -50 }}  // Start position (faded out & above)
                animate={{ opacity: 1, y: 0 }}    // End position (fades in & moves down)
                transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
            >
                <form onSubmit={formik.handleSubmit}>
                    <h1 className="text-center bi bi-bi-calendar-fill "> Add Appointements </h1>
                    <TextField label="Enter Title" variant="standard" fullWidth className="mt-1" onChange={formik.handleChange} required autoFocus name="title" />
                    <InputLabel variant="standard" className="mt-4">Enter Date</InputLabel>
                    <TextField type="date" variant="standard" fullWidth className="mt-2" onChange={formik.handleChange} required name="date" /><br />                    
                    <Button type='submit' variant="contained" fullWidth color="success" className="mt-4 mb-1">
                        Add
                    </Button>
                    <Button variant="contained" fullWidth color="error" className="mt-1 mb-1 text-white"><Link to='/dashboard' className="btn" style={{height:'30px'}}> Cancel</Link></Button>          
                   

                   


                </form>

            </motion.div>

        </div>

    )
}