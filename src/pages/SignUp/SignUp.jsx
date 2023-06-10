import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)
        if (data.password !== data.confirmPassword) {
            setError("password dose not match")
            return;
        }

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch((error) => console.log(error)
            )

    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h3 className='text-2xl font-bold m-4 text-blue-950 text-center'>Please Sign Up</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                        {errors.name && <span className='text-red-700 mt-3'>Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                        {errors.email && <span className='text-red-700 mt-3'>Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} name='password' placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'minLength' && <p className='text-red-600 mt-4'>Password must be 6 character</p>}
                        {errors.password?.type === 'maxLength' && <p className='text-red-600 mt-4'>Password must be less 20 character</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-600 mt-4'>Password must be less one uppercase one lower case, one number and one special character</p>}
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input type="password" {...register("confirmPassword", { required: true })} name='confirmPassword' placeholder="Confirm password" className="input input-bordered" />
                    </div>
                    {error && <p>{error}</p>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photo", { required: true })} name='photo' placeholder="Photo URL" className="input input-bordered" />
                        {errors.name && <span className='text-red-700 mt-3'>Photo URL is required</span>}
                    </div>
                    <input className="btn btn-warning bg-orange-950 text-white" type="submit" value="Sign Up" />
                    <p className='font-semibold'><small>Already registered? <Link to='/login' className='text-orange-400'> Go to log in</Link></small></p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;