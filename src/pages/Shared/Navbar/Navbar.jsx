import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItem = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link>Instructors</Link></li>
        <li><Link>Classes</Link></li>
        <li><Link> Dashboard</Link></li>
        <li><Link>logout</Link></li>
        <li><Link>login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to='/'><img src="https://i.ibb.co/0tJTGsc/v1033-a-22-a-removebg-preview.png" alt="" className='h-24 hidden lg:flex' /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <img src="https://i.ibb.co/xgx0mFY/fotor-2023-5-2-22-0-17.png" alt="" className='h-12'/>
            </div>
        </div>
    );
};

export default Navbar;