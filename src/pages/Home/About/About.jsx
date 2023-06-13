import React from 'react';
import img from "../../../assets/mother-daughter-playing-music-singing.jpg"

const About = () => {
    return (
        <div>
            <h4 className='text-2xl font-bold my-10 text-center'>About</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-12'>
                <div className='mt-16'>
                    <h3 className='text-4xl font-bold pb-5'>About School</h3>
                    <h5 className='text-xl font-medium text-blue-500 pb-4'>Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada.</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum sem ligula. Phasellus eleifend vel justo sit amet volutpat. Duis vitae maximus ligula, nec mattis libero. Donec eget felis odio.</p>
                    <button className='btn btn-warning bg-orange-800 text-white mt-4'>View All</button>
                </div>
                <div>
                    <img src={img} alt="" className='h-[400px] w-[650px] rounded' />
                </div>
            </div>
        </div>
    );
};

export default About;