import 'bootstrap/dist/css/bootstrap.min.css';
import { useFormik } from 'formik';
import React from 'react';

import { useState } from "react";

export function BasicForm() {

    // const [username,setUserName]=useState('');
    // const [password,setPassword]=useState('');
    // const [email,setEmail]=useState('');
    // const [user,setUser]=useState('');

    const formik = useFormik(
        {
            initialValues: 
            {
                UserName: '',
                Password: '',
                Gender: '',
                Email: '',
                State: ''

            },
            validate:handleValidation,
            onSubmit: (values) => 
                {
                    
                alert("Data Submitted successfully");
                console.log(values);
            }

        }
    )

    function handleValidation(user)
    {
        var errors = {}
        if(user.UserName.length===0)
        {
            errors.UserName='Username is required'
        }
        else {
            if(user.UserName.length<4){
                errors.UserName = 'Name too short';
            } else {
                errors.UserName = '';
            }
        }
        if(user.Password.length===0)
        {
            errors.Password='Password is required'
        }
        else {
          if(user.Password.length<8)
            {
                errors.Password = 'Password too short';
            } else {
                errors.Password = '';
            }

        }

        if(user.Gender===''){
            errors.Gender='Please Select Gender'
        }
        if(user.Email.length===0)
        {
            errors.Email='Email is required'
        }
        if(user.State==="-1")
        {
            errors.State='Please Select State'
        }
       
        


        return errors;

    }

    return (
        <div className='container-fluid' style={{height:"400px"}}>
           
            <form onSubmit={formik.handleSubmit} className='border border-2 border-primary rounded ms-2 me-2 mt-4 p-4 w-75 ' >
            <h2><span className='bi bi-person-fill align-content-center'>Register User</span></h2>

                <div className='row'>
                    <div className='col-md-4'>
                        <dl>

                            <dt>UserName : </dt>
                            <dd><input type="text" name='UserName' className='form-control ' onChange={formik.handleChange} value={formik.values.UserName} /></dd>
                            <dd className='text-danger'>{formik.errors.UserName}</dd>
                            <dt>Password : </dt>
                            <dd><input type="password" name='Password' className='form-control ' onChange={formik.handleChange} value={formik.values.Password} /></dd>
                            <dd className='text-danger'>{formik.errors.Password}</dd>
                            <dt>Email : </dt>
                            <dd><input type="email" name='Email' className='form-control ' onChange={formik.handleChange} value={formik.values.Email} /></dd>
                            <dd className='text-danger'>{formik.errors.Email}</dd>
                            <dt>Gender : </dt>
                            <dd><input type="radio" name="Gender" value="Male" onChange={formik.handleChange}/>Male</dd>
                            <dd><input type="radio" name="Gender" value="Female" onChange={formik.handleChange}/>Female</dd>
                            <dd className='text-danger'>{formik.errors.Gender}</dd>

                            
                            <dt>State : </dt>
                            <dd><select name='State' onChange={formik.handleChange} value={formik.values.State}>
                                <option value="-1">choose...</option>
                                <option value="mh">Maharashtra</option>
                                <option value="dl">Delhi</option>
                                <option value="up">Uttar Pradesh</option>
                            </select>
                            </dd>
                            <dd className='text-danger'>{formik.errors.State}</dd>

                        </dl>
                        <button type="submit" className='btn btn-primary'>Register</button>
                    </div>



                </div>





            </form>
        </div>

    )






}
