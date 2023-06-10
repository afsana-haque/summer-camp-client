import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);


    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                setPopularInstructors(data)
                console.log(data)
            })
    }, [])

    return (
        <div>
            <h3 className='text-3xl font-bold my-10 text-center'>Popular Instructors Section</h3>
            <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                popularInstructors.map(instructors => <Instructors
                    key={instructors._id}
                    instructors={instructors}
                ></Instructors>)
            }
            </div>
        </div>
    );
};

export default PopularInstructors;