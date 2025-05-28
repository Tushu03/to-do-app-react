import { useForm } from "react-hook-form";

export function HookFormDemo() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data);
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center border border-2 border-primary rounded bg-dark text-white w-50" style={{height: "350px"}}>
                <div>
                    <h2 className="bi bi-person">Register User</h2>
                    <form onSubmit={handleSubmit(submit)}>
                        <dl>
                            <dt>User Name:</dt>
                            <dd>
                                <input type="text" className="form-control" {...register("UserName", { required: true, minLength: 4 })} />
                            </dd>
                            <dd className="text-danger">
                                {errors.UserName?.type === "required" && <span>User Name Required</span>}
                                {errors.UserName?.type === "minLength" && <span>User Name Too Short</span>}
                            </dd>

                            <dt>Email:</dt>
                            <dd>
                                <input type="email" className="form-control" {...register("email", { required: true })} />
                            </dd>
                            <dd className="text-danger">
                                {errors.email?.type === "required" && <span>Email Required</span>}
                                {errors.email?.type === "email" && <span>Invalid Email</span>}
                            </dd>

                            <dt>Password:</dt>
                            <dd>
                                <input type="password" className="form-control" {...register("password", { required: true, minLength: 5 })} />
                            </dd>
                            <dd className="text-danger">
                                {errors.password?.type === "required" && <span>Password Required</span>}
                                {errors.password?.type === "minLength" && <span>Password Too Short</span>}
                            </dd>
                        </dl>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
