import React from 'react';

const Services = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold'>Provide Awesome <span className='text-green-500'>Services</span></h1>
            <center>
                <div className='grid-cols-3 gap-x-6 sm:block md:block lg:grid xl:grid p-8'>
                    <div className='p-6 border mt-4 shadow-xl rounded'>
                        <img className='w-1/5' src="https://i.ibb.co/8z56rGT/service1.png" alt="service1" />
                        <h4 className='text-lg font-bold'>Web & Mobile Design</h4>
                        <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                    </div>
                    <div className='p-6 border mt-4 shadow-xl rounded'>
                        <img className='w-1/5' src="https://i.ibb.co/LgPgGKP/service2.png" alt="service2" border="0" />
                        <h4 className='text-lg font-bold'>Graphics Design</h4>
                        <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                    </div>
                    <div className='p-6 border mt-4 shadow-xl rounded'>
                        <img className='w-1/5' src="https://i.ibb.co/3C30hRJ/service3.png" alt="service3" border="0" />
                        <h4 className='text-lg font-bold'>Web Development</h4>
                        <p>We build your website from scratch, using the latest technologies and best practices.</p>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default Services;