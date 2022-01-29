import React from 'react';

const ClientsFeedback = () => {
    return (
        <div className='my-12 p-5'>
            <h1 className='text-3xl font-bold'>Clients <span className='text-green-500'>Feedback</span></h1>
            <div className='grid-cols-3 gap-x-6 sm:block md:block lg:grid xl:grid p-8'>
                <div className='border p-5 shadow'>
                    <div className='grid grid-cols-2 lg:grid-cols-3'>
                        <div>
                            <img className='w-20' src="https://i.ibb.co/mHz54Q2/customer-1.png" alt="customer-1" border="0" />
                        </div>
                        <div className='text-left mt-2'>
                            <h4 className='text-xl font-bold'>Nash Patrik</h4>
                            <p>CEO, Manpol</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-left pt-2'>Great Service so far. They are very committed to work and responsible company. I'm very happy with their service. I'll definetly work with them again.</p>
                    </div>
                </div>
                <div className='border mt-2 p-5 shadow'>
                    <div className='grid grid-cols-2 lg:grid-cols-3'>
                        <div>
                            <img className='w-20' src="https://i.ibb.co/Pgx9GVJ/customer-2.png" alt="customer-2" border="0" />
                        </div>
                        <div className='text-left mt-2'>
                            <h4 className='text-xl font-bold'>Miriam Barron</h4>
                            <p>CEO, Philiya</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-left pt-2'>Great Service so far. They are very committed to work and responsible company. I'm very happy with their service. I'll definetly work with them again.</p>
                    </div>
                </div>
                <div className='border mt-2 p-5 shadow'>
                    <div className='grid grid-cols-2 lg:grid-cols-3'>
                        <div>
                            <img className='w-20' src="https://i.ibb.co/cyJC2K9/customer-3.png" alt="customer-1" border="0" />
                        </div>
                        <div className='text-left mt-2'>
                            <h4 className='text-xl font-bold'>Bria Malon</h4>
                            <p>CEO, Cica</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-left pt-2'>Great Service so far. They are very committed to work and responsible company. I'm very happy with their service. I'll definetly work with them again.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsFeedback;