import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Signup = () => {
    const { registerUser, signInWithGithub, signInWithGoogle, handleName, handleEmail, handleNumber, handlePassword } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault()
        registerUser(location, navigate)
    }

    // Change the page title to 'Signup'
    let title = 'Creative Agency | Your Creative Solutions';
    if (location.pathname === '/register') {
        title = 'Register | Creative Agency';
    }

    document.title = title;

    return (
        <div>
            <center>
                <h1 className='text-3xl mt-2 font-bold'>Signup for an account</h1>
                <div className="w-full max-w-xs">
                    <form onSubmit={handleRegister} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Enter your full name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={handleName} placeholder="John Doe" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                                Enter your number
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="text" onChange={handleNumber} placeholder="+8801700000000" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Enter your email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" onChange={handleEmail} placeholder="yourname@example.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={handlePassword} placeholder="******************" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign Up
                            </button>
                            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/resetpassword">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className='mt-3'>
                            <h1 className='font-bold text-2xl'>or</h1>

                            <center>
                                <button onClick={() => signInWithGoogle(location, navigate)} className='text-black font-bold py-2 mt-2 px-4 border rounded flex justify-between align-center'><img className='login-logo mr-2' src="https://www.boostability.com/wp-content/uploads/2020/01/5847f9cbcef1014c0b5e48c8.png" alt="" /><span className='login-social-margin'>Login With Google</span></button>
                                <button onClick={() => signInWithGithub(location, navigate)} className='text-black font-bold py-2 px-4 mt-2 border rounded flex justify-between align-center'><img className='login-logo mr-2' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /><span className='login-social-margin'>Login With GitHub</span></button>
                            </center>
                            <p className="mt-4 text-center text-gray-500 text-xs">
                                Already have an account?
                                <Link className="text-blue-500 hover:text-blue-800 ml-1" to="/login">
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;Creative Agency. All rights reserved.
                    </p>
                </div>
            </center>
        </div>
    );
};

export default Signup;