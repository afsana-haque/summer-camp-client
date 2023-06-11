import React from 'react';

const Classes = ({ classes }) => {
    const { name, image, instructor, price, students } = classes;
    return (

        <div className="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Total Students: {students}</p>
                <p>Instructor: {instructor}</p>
                <p>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning bg-orange-950 text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Classes;