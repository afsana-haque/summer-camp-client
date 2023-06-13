import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrashAlt} from "react-icons/fa";
import Swal from 'sweetalert2';

const MySelect = () => {
    const [cart, refetch] = useCart();

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/carts/${item._id}`, {
                method: "DELETE"
              })
              .then(res => res.json())
              .then(data => {
                if(data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }

    return (
        <div className='w-full px-20 my-12'>
            <div className='flex justify-between'>
                <h3 className='text-2xl font-semibold'>Total select classes: {cart.length}</h3>
                <button className="btn btn-warning bg-orange-800 text-white">Pay</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>
                                <label>
                                    #
                                </label>
                            </th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Instructor</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.instructor}</td>
                                <td>{item.seats}</td>
                                <td>${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-error text-white text-xl"><FaTrashAlt/></button>
                                </td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelect;