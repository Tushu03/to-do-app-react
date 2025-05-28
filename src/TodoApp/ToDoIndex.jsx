import '../App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { Register } from './Register';
import { DashBoard } from './Dashboard';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { AddApp } from './AddAppointment';
import { DeleteApp } from './DeleteApp';
import { EditApp } from './EditApp';



export function Index() {
    return (
        <BrowserRouter>
            <ToastContainer />


            <div className='container-fluid'>
                <div className="bg-image">

                </div>
                <div className="d-flex justify-content-center align-items-center  w-25 mx-auto" style={{ height: '50px' }}>
                    <Link to="/" className="btn btn-dark text-light w-100 bi bi-house"> Home</Link>


                </div>
                <section className='mt-2 p-2'>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route path='/dashboard' element={<DashBoard />} />
                        <Route path='add-app' element={<AddApp />} />
                        <Route path='/delete/:id' element={<DeleteApp />} />
                        <Route path='/edit-app/:id' element={<EditApp />} />

                    </Routes>





                </section>

            </div>
        </BrowserRouter>




    )
}