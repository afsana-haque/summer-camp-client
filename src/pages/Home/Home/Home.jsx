import React, { useContext } from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import About from '../About/About';
import { AuthContext } from '../../../providers/AuthProvider';

const Home = () => {
    const {isDarkMode} = useContext(AuthContext);
    return (
        <div>
            <Banner></Banner>
            <div className={`${isDarkMode? "bg-slate-800 p-10" :"bg-base-100 p-10"}`}>
            <h3 className={`${isDarkMode? "text-3xl font-bold text-white my-10 text-center" : "text-3xl font-bold my-10 text-center"}`}>Popular Classes Section</h3>
            <PopularClasses></PopularClasses>
            </div>
            <div className={`${isDarkMode? "bg-slate-800 p-10 text-white" :"bg-base-100 p-10"}`}>
            <About></About>
            </div>
            <div className={`${isDarkMode? "bg-slate-800 p-10" :"bg-base-100 p-10"}`}>
            <h3 className={`${isDarkMode? "text-3xl font-bold text-white my-10 text-center" : "text-3xl font-bold my-10 text-center"}`}>Popular Instructors Section</h3>
            <PopularInstructors></PopularInstructors>
            </div>
        </div>
    );
};

export default Home;
