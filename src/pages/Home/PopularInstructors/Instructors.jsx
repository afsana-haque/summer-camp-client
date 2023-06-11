import React from 'react';

const Instructors = ({ instructors }) => {
    const { image, name, experience, students } = instructors;
    return (
        <div className="card card-side bg-base-100 shadow-xl mb-10 flex justify-between items-center">
            <figure><img src={image} alt="Movie" className='w-[350px]'  /></figure>
            <div className="mr-10">
                <h2 className="card-title">{name}</h2>
                <p>Experience: {experience}</p>
                <p>Total Students: {students}</p>
            </div>
        </div>
    );
};

export default Instructors;