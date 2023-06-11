import React from 'react';

const PopularClass = ({ popularClass }) => {
    const {image, name, instructor,students} =  popularClass;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mb-10">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Experience: {instructor}</p>
                <p>Total Students: {students}</p>
            </div>
        </div>
    );
};

export default PopularClass;