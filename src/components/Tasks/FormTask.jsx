import { useState } from "react";
import { useCaptcha } from "../Own_Hooks/Captcha"
import { useFormik } from "formik";



export function FormTask()
{

    let code=useCaptcha();
    const [code1,setCode1]=useState('784596')
    const [userData,setUserData] =useState(null);

    function refreshCode()
    {
        setCode1(code);       

    }

    let formik=useFormik(
    {
        initialValues:
        {
            username:'',
            email:'',
            age:'',
            mobile:'',
            city:'',
            captcha:''
        },
        validate:handleValidation, 
       
        onSubmit: (values)=>{
            alert("Data Saved successfully"); 
           console.log(values);
                
            localStorage.setItem('age',formik.values.age);
            localStorage.setItem('username',formik.values.username);
            localStorage.setItem('mobile',formik.values.mobile);
            localStorage.setItem('email',formik.values.email);
            localStorage.setItem('city',formik.values.city);
        }
    }
    )

    function handleValidation(user)
    {
        var errors = {}
        if(user.username.length===0)
        {
            errors.username='Username is required'
        }
        else {
            if(user.username.length<4){
                errors.username = 'Name too short';
            } 
        }
        if(user.mobile.length===0)
        {
            errors.mobile='Mobile Number is required'
        }
        else {
            if(user.mobile.length!==10){
                errors.mobile = 'Invalid Mobile Number';
            } 
        }
        
        if(user.age.length===0)
        {
            errors.age='Age is required'
        }


        if(user.email.length===0)
        {
            errors.email='Email is required'
        }
       
        if(user.city==="-1")
        {
            errors.city='Please Select City'
        }
        
        if(user.captcha!==code1)
        {
            errors.captcha='Invalid Code Try Again'
        }
        
        return errors;

    }

    function handleView()
    {
        const storeData={
            username:localStorage.getItem('username'), email:localStorage.getItem('email'),
            age:localStorage.getItem('age'),mobile:localStorage.getItem('mobile'), city:localStorage.getItem('city')
        }
        setUserData(storeData);
    }

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center h-75">
                <form onSubmit={formik.handleSubmit} className="border border-1 border-primary p-2 rounded rounded-2 bg-warning" style={{width:'400px',boxShadow:'5px 5px 5px gray'}}>
                    <h2 className="text-center bi bi-person-fill"> Register User</h2>
                    <dl>
                        <dt>Username : </dt>
                        <dd><input type="text" name="username" className="form-control" onChange={formik.handleChange} placeholder="Enter Username" value={formik.values.username} /></dd>
                        <dd className='text-danger fw-bold'>{formik.errors.username}</dd>
                        <dt>Email : </dt>
                        <dd><input type="email" name="email" className="form-control"  onChange={formik.handleChange}  placeholder="Enter Email" value={formik.values.email}/></dd>
                        <dd className='text-danger fw-bold'>{formik.errors.email}</dd>
                        <dt>Age : </dt>
                        <dd><input type="number" name="age" className="form-control"  onChange={formik.handleChange}  placeholder="Enter Age" value={formik.values.age} /></dd>
                        <dd className='text-danger fw-bold'>{formik.errors.age}</dd>
                        <dt>Mobile : </dt>
                        <dd><input type="text" name="mobile" className="form-control"  onChange={formik.handleChange}  placeholder="Enter Mobile" value={formik.values.mobile} /></dd>
                        <dd className='text-danger fw-bold'>{formik.errors.mobile}</dd>
                        <dt>City : </dt>
                        <select className="form-select" name="city" onChange={formik.handleChange} value={formik.values.city} >
                            <option value="-1">Select City</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Bangalore">Bangalore</option>
                        </select>   
                        <dd className='text-danger fw-bold'>{formik.errors.city}</dd>
                        <dt>Verify Code <button type="button" className="btn bi bi-arrow-clockwise " onClick={refreshCode}></button> </dt>
                        <dd>{code1}</dd>
                        <dd><input type="text" name="captcha" className="form-control" value={formik.values.captcha}  onChange={formik.handleChange}  placeholder="Enter Code "/></dd>
                        <dd className='text-danger fw-bold'>{formik.errors.captcha}</dd>                     
                        
                        
                    
                    </dl>
                    <div>
                        <button type="submit" className="btn btn-primary w-25 mx-2">Submit</button>
                        <button type="reset" className="btn btn-danger w-25" onClick={handleView}>View</button>

                     </div>

                    
                </form>

            </div>
            {
                userData &&
                
                <div className="alert alert-success alert-dismissible mx-auto rounded w-50 mt-3">
                   
                    <h1 className="alert-title text-center">User Details:</h1>
                    <button class="btn-close" data-bs-dismiss="alert"></button>
                    <ul>
                        <li>Username: {userData.username}</li>
                        <li>Email: {userData.email}</li>
                        <li>Age: {userData.age}</li>
                        <li>Mobile: {userData.mobile}</li>
                        <li>City: {userData.city}</li>
                    </ul>
                </div>
            }

            

        </div>
    )
}