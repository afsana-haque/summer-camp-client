import React, { useEffect, useState } from 'react';
import PopularClass from './PopularClass';


const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState([]);


    useEffect(() => {
        fetch('https://music-school-server-bay.vercel.app/classes')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data)
                console.log(data)
            })
    }, [])
    return (
        <div className='my-14'>
           
            <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    popularClasses.slice(0,6).map(popularClass => <PopularClass 
                    key={popularClass._id}
                    popularClass={popularClass}
                    ></PopularClass>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;