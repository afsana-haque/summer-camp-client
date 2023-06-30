import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/prHxTGg/kids-being-part-sunday-school-1.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-72 left-12 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-6">
                    <div className='text-center'>
                        <h3 className='lg:text-3xl text-xl font-bold text-orange-400 pb-4'>Playing Guitar —</h3>
                        <h2 className='lg:text-5xl text-xl font-bold text-white pb-4'>Realy Easy</h2>
                        <p className='text-gray-100 pb-4'>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus<br></br> metus. Donec eu volutpat nibh, in maximus ligula.</p>
                        <button className='btn btn-warning bg-orange-800 text-white'>Read More</button>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/3YwGF5K/Class-5-770x440.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-72 left-12 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-6">
                    <div className='text-center'>
                        <h3 className='lg:text-3xl text-xl font-bold text-orange-400 pb-4'>Playing Guitar —</h3>
                        <h2 className='lg:text-5xl text-xl font-bold text-white pb-4'>Realy Easy</h2>
                        <p className='text-gray-100 pb-4'>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus<br></br> metus. Donec eu volutpat nibh, in maximus ligula.</p>
                        <button className='btn btn-warning bg-orange-800 text-white'>Read More</button>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/c1RhXfz/mother-daughter-playing-music-singing.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-72 left-12 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-6">
                    <div className='text-center'>
                        <h3 className='lg:text-3xl text-xl font-bold text-orange-400 pb-4'>Playing Guitar —</h3>
                        <h2 className='lg:text-5xl text-xl font-bold text-white pb-4'>Realy Easy</h2>
                        <p className='text-gray-100 pb-4'>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus<br></br> metus. Donec eu volutpat nibh, in maximus ligula.</p>
                        <button className='btn btn-warning bg-orange-800 text-white'>Read More</button>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/x1YMpgw/group-people-running-podcast-together.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 lg:left-72 left-12 top-1/2 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] p-6">
                    <div className='text-center'>
                        <h3 className='lg:text-3xl text-xl font-bold text-orange-400 pb-4'>Playing Guitar —</h3>
                        <h2 className='lg:text-5xl text-xl font-bold text-white pb-4'>Realy Easy</h2>
                        <p className='text-gray-100 pb-4'>Pellentesque mattis mauris ac tortor volutpat, eu fermentum sapien euismod. In id tempus<br></br> metus. Donec eu volutpat nibh, in maximus ligula.</p>
                        <button className='btn btn-warning bg-orange-800 text-white'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;