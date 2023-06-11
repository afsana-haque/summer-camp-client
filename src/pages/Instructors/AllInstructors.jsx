import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';

const AllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data => {
            setAllInstructors(data);
            setLoading(false);
            console.log(data)
        })
    },[])
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-2 gap-5 my-12'>
            {
                allInstructors.map(instructors => <Instructors 
                key={instructors._id}
                instructors={instructors}
                ></Instructors>)
            }
        </div>
    );
};

export default AllInstructors;