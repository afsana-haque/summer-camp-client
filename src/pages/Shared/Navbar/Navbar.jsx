import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import DarkModeToggle from "react-dark-mode-toggle";
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';
import useInstructor from '../../../hooks/useInstructor';

const Navbar = () => {
    const { user, logOut, isDarkMode, setIsDarkMode } = useContext(AuthContext);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch((error) => console.log(error)
            )
    }

    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allInstructors'>Instructors</Link></li>
        <li><Link to='/allClasses'>Classes</Link></li>
        {isAdmin || isInstructor ? "" :
            <li><Link to='/dashboard/mySelect'><button className="flex gap-2">
                <FaShoppingCart />
                <div className="badge badge-info text-white">+{cart?.length || 0}</div>
            </button></Link></li>
        }
        {isAdmin &&
            <li><Link to='/dashboard/manageClasses'><button className="flex gap-2">
                Admin Dashboard
            </button></Link></li>
        }
        {isInstructor &&
            <li><Link to='/dashboard/addAClass'><button className="flex gap-2">
                Instructors Dashboard
            </button></Link></li>
        }

        {
            user ? <>
                <li><button onClick={handleLogOut} className="btn btn-ghost">LogOut</button></li>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
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
                <Link to='/'><img src="https://i.ibb.co/cgt0bFp/logo.png" alt="" className='h-20 hidden lg:flex' /></Link>
                <div className='ml-5'>
                    <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={80}
                    />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <img src="https://i.ibb.co/xgx0mFY/fotor-2023-5-2-22-0-17.png" alt="" className='h-12' />
            </div>
        </div>
    );
};

export default Navbar;
//