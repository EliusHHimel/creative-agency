import React from 'react';

const OurWorks = () => {
    return (
        <div className='our-works p-5' id='our-portfolio'>
            <h1 className='text-3xl text-white font-bold'>Here Are Some of <span className='text-green-500'>Our Works</span></h1>
            <div>
                <div className='grid-cols-3 gap-x-6 sm:block md:block lg:grid xl:grid p-8'>
                    <img className='scale-image mt-2' src="https://i.ibb.co/1z6HVHN/carousel-1.png" alt="carousel-1" border="0" />
                    <img className='scale-image mt-2' src="https://i.ibb.co/5Bkkvf5/carousel-2.png" alt="carousel-2" border="0" />
                    <img className='scale-image mt-2' src="https://i.ibb.co/mHxbQ5m/carousel-3.png" alt="carousel-3" border="0" />
                    <img className='scale-image mt-2' src="https://i.ibb.co/PZSW3Mx/carousel-4.png" alt="carousel-4" border="0" />
                    <img className='scale-image mt-2' src="https://i.ibb.co/ggpSsX6/carousel-5.png" alt="carousel-5" border="0" />
                </div>
            </div>
        </div>
    );
};

export default OurWorks;