import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Classes = ({ classesCart }) => {
    const { name, image, instructor, price, students, seats, _id } = classesCart;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = classesCart => {
        console.log(classesCart)
        if (user) {
            const cartItem = {classesId: _id, name, image, price, email: user.email}
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body:JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added on tne cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}})
                }
            })
        }
    }
    return (

        <div className={`card card-compact w-96 ${seats === 0 ? "bg-red-600 text-white" : "bg-base-100"} shadow-xl`}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Students: {students}</p>
                <p>Instructor: {instructor}</p>
                <p>Available Seats: {seats}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button disabled={seats === 0 ? true : false} onClick={() => handleAddToCart(classesCart)} className="btn btn-warning bg-orange-950 text-white">select</button>
                </div>
            </div>
        </div>
    );
};

export default Classes;