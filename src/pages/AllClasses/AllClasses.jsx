import React, { useEffect, useState } from 'react';
import Classes from './Classes';

const AllClasses = () => {
    const [allClasses, setAllClasses] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setAllClasses(data);
            setLoading(false);
            console.log(data)
        })
    },[])
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5 my-12'>
            {
                allClasses.map(classes => <Classes
                key={classes._id}
                classes={classes}
                ></Classes>)
            }
        </div>
    );
};

export default AllClasses;