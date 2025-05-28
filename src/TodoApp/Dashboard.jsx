import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

export function DashBoard() {
    const [cokkies, setCookies, removeCookies] = useCookies(['username']);
    const [appointments, setappointments] = useState([{ id: 0, title: '', date: '', username: '' }]);

    let navigate = useNavigate();

    const headers = appointments.length > 0 ? Object.keys(appointments[0]) : [];

    useEffect(() => {
        axios.get(`http://127.0.0.1:4000/appointements`)
            .then(response => {
                let appointments = response.data.filter(appointment => appointment.username === cokkies['username'])
                setappointments(appointments);
            })


    }, []);



    return (
        <div className="container-fluid">
            <motion.div
                className="container mx-auto w-50 bg-light text-black border border-2 border-primary"
                style={{ maxHeight: "80vh",overflowY:"auto", boxShadow: "4px 4px 4px 4px gray", borderRadius: '10px' }}
                initial={{ opacity: 0, y: -50 }}  // Start position (faded out & above)
                animate={{ opacity: 1, y: 0 }}    // End position (fades in & moves down)
                transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition
            >
                <div className="d-flex justify-content-between">
                    <h2>Welcome {cokkies.username}</h2>
                    <div className="mt-2">
                        <Link to='/add-app' className="btn btn-primary mt-1 mx-2">Add Appointment </Link> 
                        <button onClick={() => {
                            removeCookies('username');
                            setappointments([]);
                            navigate('/');


                        }} className="btn btn-danger bi bi-person"> Logout</button>
                    </div>

                </div>
                <h4 className='text-center mt-3'>Your Appointments</h4>
                <div>
                    <table className={`table caption-top table-hover`}>
                        <caption>{headers.length > 0 ? 'Your Appointments' : 'No Appointments Found'}</caption>
                        <thead>
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index}>{header.toUpperCase()}</th>
                                ))}
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map(appointments =>
                                    <tr key={appointments.id}>
                                        {
                                            headers.map(header =>
                                                <td key={header}>{appointments[header]}</td>
                                            )
                                        }
                                        
                                        <td>
                                            <Link to={`/edit-app/${appointments.id}`}  className="btn btn-warning bi bi-pen-fill"></Link>
                                            <Link to={`/delete/${appointments.id}`}  className="btn btn-danger bi bi-trash-fill mx-2"></Link>
                                        </td>
                                    </tr>
                                )
                            }


                        </tbody>
                    </table>


                </div>


            </motion.div>




        </div>

    )
}