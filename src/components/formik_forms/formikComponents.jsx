
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
export function Components()
{
    return(
        <div className="container-fluid">
            <div className="container justify-content-center align-items-center w-50 pb-2 mt-3 mx-auto bg-dark text-white h-50 rounded">
                <h3 className="fw-bold fs-1 bi bi-person text-center">Register User</h3>
                <Formik initialValues={{username:'',gender:'',email:'', password:''}}
                validationSchema={yup.object({username:yup.string().required('username Required').min(5,'User name Must Be at least 5 characters')
                    , gender:yup.string().required('Gender Required'), email:yup.string().email('Invalid Email').required('Email Required'), password:yup.string().required('Password Required').min(5,'Password Must Be at least 5 characters')})}
                onSubmit={(values) => {console.log(values)}}>
                    <Form>
                        <dl>
                            <dt>UserName : </dt>
                            <dd><Field type="text" name="username" className="form-control" /></dd>
                            <dd><ErrorMessage name="username" component="div" className="text-danger"/> </dd>
                            <dt>Gender : </dt>
                            <dd><Field type="radio" name="gender"  value="Male" />Male</dd>                       
                            
                            <dd><Field type="radio" name="gender" value="Female"/>Female</dd>
                            <dd><ErrorMessage name="gender" component="div" className="text-danger"/> </dd>
                            <dt>Email : </dt>
                            <dd><Field type="email" name="email" className="form-control" /></dd>
                            <dd><ErrorMessage name="email" component="div" className="text-danger"/> </dd>
                            <dt>Password : </dt>
                            <dd><Field type="password" name="password" className="form-control" /></dd>
                            <dd><ErrorMessage name="password" component="div" className="text-danger"/> </dd>
                        </dl>
                        <button type="submit" className="d-flex btn btn-primary mx-auto">Submit</button>

                    </Form>

                </Formik>


            </div>
        </div>
    )

}


