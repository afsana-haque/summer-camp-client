import React from 'react';

const Instructors = ({ instructors }) => {
    const {image, name, experience,students} = instructors;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Experience:{experience}</p>
                <p>Total Students: {students}</p>
            </div>
        </div>
    );
};

export default Instructors;