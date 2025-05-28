import { Button, InputLabel, TextField} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom"
export function EditApp() {
    let navigate = useNavigate();
    let params=useParams();


     const [appointments, setappointments] = useState([{ id: 0, title: '', date: '', username: '' }]);

     useEffect(() => {
        axios.get(`http://127.0.0.1:4000/appointements/${params.id}`)
            .then(response => {
               
                setappointments(response.data);
            })


    }, []);


    let formik = useFormik(
        {
            initialValues: {
                id:appointments.id,
                title: appointments.title,
                date: appointments.date,
                username: appointments.username
                
            },
            onSubmit: (values) => {
                axios.put(`http://127.0.0.1:4000/appointements/${params.id}`, values)
                    .then((response) => {                        
                        navigate("/dashboard")


                    })



            },
            enableReinitialize:true
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
                    <h1 className="text-center"> Edit Appointement </h1>
                    <TextField label="Enter Title" value={formik.values.title} variant="standard" fullWidth  className="mt-1" onChange={formik.handleChange} required autoFocus name="title" />

                    <InputLabel variant="standard" className="mt-4">Enter Date</InputLabel>
                    <TextField  value={formik.values.date} type="date" variant="standard" fullWidth className="mt-1" onChange={formik.handleChange} required name="date" /><br />

                    <Button type='submit' variant="contained" color="success" className="mt-2">
                        Save
                    </Button>
                    <Link to='/dashboard' className="btn btn-warning mx-2 mt-2">Cancel</Link>






                </form>

            </motion.div>

        </div>
    )
}