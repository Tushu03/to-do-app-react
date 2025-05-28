import { useFormik } from "formik";
import * as yup from "yup";

export function YupForm()
{
    const formik=useFormik(
        {
            initialValues:{
                username:'',
                email:'',            
                password:''

            },
            validationSchema:yup.object({
                username:yup.string().min(3,'Username should be at least 3 characters long').required('Username is required'),
                email:yup.string().email('Invalid email format').required('Email is required'),
                password:yup.string().min(6,'Password should be at least 6 characters long').required('Password is required')

            }),
            onSubmit:(values,actions)=>{
                console.log(values)
        
            }
        }


    )


    
return(
    <div className="container-fluid">
        <div>
            <form onSubmit={formik.handleSubmit}>
              
                <div className="container justify-content-center align-items-center w-50 pb-2 mt-3 mx-auto bg-dark text-white h-50 rounded" >
                    <dl>
                    <h3 className="bi bi-person-fill text-center">Register User </h3>
                        
                        <dt>Username : </dt>
                        <dd><input type="text" className="form-control" name="username"   {...formik.getFieldProps("username")}/></dd> /*It Is sperad operator which will have all events we don't need to write like blur,submit,change */
                        <dd className="text-danger">{formik.errors.username}</dd>
                        <dt>Email : </dt>
                        <dd><input type="email" className="form-control" name="email"  onChange={formik.handleChange} /></dd>
                        <dd className="text-danger">{formik.errors.email}</dd>
                        <dt>Password : </dt>
                        <dd><input type="password" className="form-control" name="password"  onChange={formik.handleChange} /></dd>
                        <dd className="text-danger">{formik.errors.password}</dd>
                        
                    </dl>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>

        </div>
    </div>
)



}
