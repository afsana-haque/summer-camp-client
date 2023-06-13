import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBookOpen, FaShoppingCart, FaHome, FaChalkboardTeacher } from "react-icons/fa";
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();
  const instructors = false;
  const admin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-blue-200 text-base-content ">
          <Link to='/'><img src="https://i.ibb.co/cgt0bFp/logo.png" alt="" className='h-20 my-5' /></Link>
          { admin || instructors ? "" : 
            <div>
              <li>
                <Link to='/dashboard/mySelect'><FaShoppingCart /> My Selected Classes <span className='badge badge-info'>+{cart?.length || 0}</span></Link></li>
              <li><Link to='/dashboard/myEnroll'><FaBookOpen /> My Enrolled</Link></li>
            </div>
          }
          { instructors && 
            <div>
              <li>
                <Link to='/dashboard/addAClass'> Add a Class</Link></li>
              <li><Link to='/dashboard/myEnroll'> My Classes</Link></li>
            </div>
          }
          { admin &&
            <div>
              <li>
                <Link to='/dashboard/manageClasses'> Manage Classes</Link></li>
              <li><Link to='/dashboard/manageUser'> Manage Users</Link></li>
            </div>
          }
          <div className="divider"></div>
          <li><Link to='/'><FaHome />Home</Link></li>
          <li><Link to='/allClasses'><FaBookOpen />Classes</Link></li>
          <li><Link to='/allInstructors'><FaChalkboardTeacher />Instructors</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;