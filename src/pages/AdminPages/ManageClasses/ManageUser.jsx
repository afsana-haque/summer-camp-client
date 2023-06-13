import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleManageAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
            
        }
    

    return (
        <div className='w-full px-20 my-12'>
            <h3 className='text-2xl font-semibold my-10'>Manage Users : {users.length}</h3>
            <div className="overflow-x-auto ">
                <table className="table table-zebra ">
                    <thead className='bg-slate-300'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === "admin" ? "admin" :
                                <button onClick={() => handleManageAdmin(user)} className="btn btn-warning bg-orange-800 text-white"> Admin</button>
                                    }</td>
                                <td>{user.role === "instructor" ? "instructor" :
                                <button className="btn btn-warning bg-orange-800 text-white">instructor</button>
                                    }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;