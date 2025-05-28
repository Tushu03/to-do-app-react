import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
export function DeleteApp() {

    let params=useParams();
    let navigate = useNavigate();
    const [appointments, setappointments] = useState([{ id: 0, title: '', date: '', username: '' }]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:4000/appointements/${params.id}`)
            .then(response => {
               
                setappointments(response.data);
            })


    }, []);


    function handleDelete()
    {
        axios.delete(`http://127.0.0.1:4000/appointements/${params.id}`)
            .then(response => {
                console.log("Deleted");
                navigate("/dashboard");
            })
    }
    
    return (
        <motion.div
            className="container mx-auto w-50 bg-light text-black"
            style={{ height: "0px", boxShadow: "4px 4px 4px 4px gray", borderRadius: '10px' }}
            initial={{ opacity: 0, y: -50 }}  // Start position (faded out & above)
            animate={{ opacity: 1, y: 0 }}    // End position (fades in & moves down)
            transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
        >
            <div className="container">
                <div class="alert alert-danger alert-dismissible mx-auto rounded w-75" style={{boxShadow: '5px 5px 5px gray'}}>
                    <h1 class="alert-title">Delete Record</h1>
                    <p class="alert-description">Are you sure you to delete this record<br></br> " {appointments.title} <br></br>{appointments.date}"</p>

                    <button className="btn btn-danger mx-2" onClick={handleDelete}>Yes</button>
                    
                    <Link to='/dashboard' className="btn btn-warning">Cancel</Link>
                </div>
            </div>
            

        </motion.div>


    )
}