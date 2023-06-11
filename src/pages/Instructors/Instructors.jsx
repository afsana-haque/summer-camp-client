import React from 'react';

const Instructors = ({ instructors }) => {
    const { image, name, experience, conducted, available_slots, students } = instructors;
    return (

        <div className="card card-side bg-base-100 shadow-xl flex gap-6 items-center">
            <figure><img src={image} alt="Movie" className='w-[350px]'/></figure>
            <div className="">
                <h2 className="card-title">{name}</h2>
                <p>Experience: {experience}</p>
                <p>Total Classes Conducted: {conducted}</p>
                <p>Available Slots: {available_slots}</p>
                <p>Total Students: {students}</p>
            </div>
        </div>

    );
};

export default Instructors;