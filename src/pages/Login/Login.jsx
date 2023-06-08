import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-warning bg-orange-950 text-white">Login</button>
                    </div>
                    <p className='font-semibold'><small>New here? <Link to='/signup' className='text-orange-900'>Create a New Account</Link></small></p>
                </form>
            </div>
        </div>

    );
};

export default Login;