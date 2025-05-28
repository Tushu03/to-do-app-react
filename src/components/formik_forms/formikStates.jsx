import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";


export function StateDemo()
{

    return(
        <div className="container-fluid">
            <div className="mx-auto m-2 p-2 border border-2 border-success bg-dark text-white rounded w-50 h-50">
                <h1 className="text-center fst-italic">State Demo</h1>
                <Formik
                    initialValues={{username: '', gender:'', password: '', email: ''}}
                    validationSchema={yup.object({
                        username: yup.string().required('username Required').min('3','username at least 3 characters'),
                        gender: yup.string().required('Gender Required'),
                        password: yup.string().required('Password Required').min(5,'Password at least 5 characters'),
                        email: yup.string().email('Invalid Email').required('Email Required')
                    })}
                    onSubmit={(values) => {
                        console.log(values);
                       
                    }}>
                        {
                            form =><Form>
                                <div className="mb-3">
                                    <dl>
                                        <dt>Username : </dt>
                                        <dd><Field type="text" name="username" /></dd>
                                        <dd><ErrorMessage name="username" component="div" className="text-danger"/></dd>
                                        <dt>Gender : </dt>
                                        <dd><Field type="radio" name="gender" value="Male"/>Male</dd>
                                        <dd><Field type="radio" name="gender" value="Female"/>Female</dd>
                                        <dd><ErrorMessage name="gender" component="div" className="text-danger"/></dd>
                                        <dt>Email : </dt>
                                        <dd><Field type="email" name="email" /></dd>
                                        <dd><ErrorMessage name="email" component="div" className="text-danger"/></dd>
                                        <dt>Password : </dt>
                                        <dd><Field type="password" name="password" /></dd>
                                        <dd><ErrorMessage name="password" component="div" className="text-danger"/></dd>                                       


                                    </dl>
                                    <button type="submit" className="d-flex btn btn-primary me-2 " disabled={!(form.isValid)}>Submit</button>
                                    <button className={(form.dirty)?'d-inline ms-2':'d-none ms-2'}>Save</button>
                                    {/* Here dirty will return true is the any change is happend in form otherwise button will not display           */}
                                    <h4>Check Following Errors</h4> 
                                    {/* How to get and show all errors */}
                                    <ul className="list-group list-group-flush">
                                    {
                                        Object.keys(form.errors).map(property=><li key={property}> {form.errors[property]} </li>
                                            
                                        )
                                    }
                                    </ul>



                                </div>

                            
                                </Form>

                        }

                        


                    </Formik>
                
            </div>
        </div>

    )

}