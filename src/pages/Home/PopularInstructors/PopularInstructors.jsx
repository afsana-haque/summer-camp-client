import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setPopularInstructors(data)
                // console.log(data)
            })
    }, [])

    return (
        <div>
           
            <div className='grid  grid-cols-1 lg:grid-cols-2 gap-5'>
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