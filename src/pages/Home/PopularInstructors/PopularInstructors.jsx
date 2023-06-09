import React, { useEffect, useState } from 'react';
import Instructors from './Instructors';
// import instructor1 from "../../../assets/instructor2.jpg"
// import instructor2 from "../../../assets/instructor3.jpg"
// import instructor3 from "../../../assets/instructor4.jpg"
// import instructor4 from "../../../assets/instructor5.jpg"
// import instructor5 from "../../../assets/instructor6.jpg"
// import instructor6 from "../../../assets/instructor7.jpg"

const PopularInstructors = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);

    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                setPopularInstructors(data)
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