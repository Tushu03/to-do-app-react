import { ErrorMessage, Field, Formik,Form } from "formik";
import React from "react";
import * as yup from "yup";

export class FormDemo extends React.Component{
    constructor()
    {
        super();
        this.state={username:'',password:''};


    }
    render()
    {
        return (
            <div className="container-fluid">
                <div className="mx-auto mt-2 p-2 bg-dark text-white border-2 border-primary" style={{boxShadow:'5px 5px 2px gray'}} >
                    <h1 className="text-center bi bi-person "> Login Form</h1>
                    <Formik initialValues={{username:'',password:''}} onSubmit={(values)=>{console.log(values)}}
                        validationSchema={yup.object({username:yup.string().required('username Required'), password:yup.string().required('password Required')})}>
                            <Form>
                                <dl>
                                    <dt>User Name:</dt>
                                    <dd><Field type='text' name='username'></Field></dd>
                                    <dd className="text-danger"><ErrorMessage name="username"></ErrorMessage></dd>
                                    <dt>Password:</dt>
                                    <dd><Field type='password' name='password'></Field></dd>
                                    <dd className="text-danger"><ErrorMessage name="password"></ErrorMessage></dd>

                                    <dt></dt>
                                    <dd><input type="submit" className="btn btn-primary" value="Submit" /></dd>
                                </dl>
                            </Form>

                    </Formik>


                </div>
                
            </div>
        );
    }


}

    