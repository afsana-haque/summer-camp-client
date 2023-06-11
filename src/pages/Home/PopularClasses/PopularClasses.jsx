import React, { useEffect, useState } from 'react';


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);


    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='my-14'>
            <h3 className='text-3xl font-bold my-10 text-center'>Popular Classes Section</h3>
            

        </div>
    );
};

export default PopularClasses;