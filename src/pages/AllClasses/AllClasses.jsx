import React, { useEffect, useState } from 'react';
import Classes from './Classes';

const AllClasses = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://music-school-server-bay.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            setAllClasses(data);
            setLoading(false);
        })
    },[])
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5 my-12'>
            {
                allClasses.map(classesCart => <Classes
                key={classesCart._id}
                classesCart={classesCart}
                ></Classes>)
            }
        </div>
    );
};

export default AllClasses;