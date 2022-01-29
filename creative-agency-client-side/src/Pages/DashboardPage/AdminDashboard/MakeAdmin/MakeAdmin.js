import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <form>
                <div className='flex'>
                    <div className='text-left'>
                        <label className='font-bold' htmlFor='service-title'>Enter email</label>
                        <input id='service-title' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Enter email" />
                        <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Make Admin</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;