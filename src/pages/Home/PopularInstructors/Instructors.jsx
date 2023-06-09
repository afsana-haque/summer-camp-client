import React from 'react';

const Instructors = ({ instructors }) => {
    return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={instructors.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className="card-actions">
                        <button className="btn btn-warning bg-orange-950 text-white">{instructors.name}</button>
                    </div>
                </div>
            </div>
    );
};

export default Instructors;