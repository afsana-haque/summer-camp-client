import React, { useEffect, useState } from 'react';

const AllInstructors = () => {
    const [allInstructors, setAllInstructors] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('')
        .then(res => res.json())
        .then(data => {
            setAllInstructors(data);
            setLoading(false);
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllInstructors;