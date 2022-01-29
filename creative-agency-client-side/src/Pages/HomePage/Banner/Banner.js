import React from 'react';
import { NavLink } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png';

const Banner = () => {
    return (
        <div className='lg:flex p-5 justify-center align-center bg-custom'>
            <div className='lg:pr-24 lg:gap-4 text-left flex flex-col justify-center align-center'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Let’s Grow Your Brand To The Next Level</h1>
                <p>
                    Having a great product available to your customers at a great price does absolutely nothing for you if your customers don’t know about it.
                </p>
                <NavLink className="inline-block w-1/4 text-center text-sm px-4 py-4 login-btn leading-none border rounded text-white border-white hover:border-black hover:text-black hover:bg-white mt-4 lg:mt-0" to="/hire">Hire Us</NavLink>
            </div>
            <div>
                <img src={frame} alt="" />
            </div>
        </div>
    );
};

export default Banner;