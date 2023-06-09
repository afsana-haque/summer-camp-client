import React from 'react';
import img_1 from "../../../assets/beautiful-romantic-girls-park-with-violin.jpg"
import img_2 from "../../../assets/Class_4-770x440.jpg"
import img_3 from "../../../assets/Class_5-770x440.jpg"
import img_4 from "../../../assets//close-up-hand-writing-song.jpg"
import img_5 from "../../../assets/kids-being-part-sunday-school (1).jpg"
import img_6 from "../../../assets/male-drummer-playing-drums-dark-room-with-beautiful-lighting.jpg"

const PopularClasses = () => {
    return (
        <div className='my-14'>
            <h3 className='text-3xl font-bold my-10 text-center'>Popular Classes Section</h3>
            <div className='grid  grid-cols-1 lg:grid-cols-3 gap-5 space-x-0'>
                <div>
                    <img src={img_1} alt="" className='h-[300px] w-[600px] border-solid border-4 border-orange-300 rounded' />
                </div>
                <div>
                    <img src={img_2} alt="" className='h-[300px] w-[600px] border-solid border-4 border-orange-300 rounded' />
                </div>
                <div>
                    <img src={img_3} alt="" className='h-[300px] w-[600px] border-solid border-4 border-orange-300 rounded' />
                </div>
                <div>
                    <img src={img_4} alt="" className='h-[300px] w-[600px]border-solid border-4 border-orange-300 rounded' />
                </div>
                <div>
                    <img src={img_5} alt="" className='h-[300px] w-[600px] border-solid border-4 border-orange-300 rounded' />
                </div>
                <div>
                    <img src={img_6} alt="" className='h-[300px] w-[600px] border-solid border-4 border-orange-300 rounded' />
                </div>
  

            </div>
        </div>
    );
};

export default PopularClasses;