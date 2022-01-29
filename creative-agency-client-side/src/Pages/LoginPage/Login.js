import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import logo from "../../images/logos/logo.png";

const Login = () => {
    const { loginHandler, signInWithGoogle, signInWithGithub, handleEmail, handlePassword } = useFirebase();
    const location = useLocation();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        loginHandler(location, navigate);
    }

    let title = 'Creative Agency | Your Creative Solutions';
    if (location.pathname === '/login') {
        title = 'Login | Creative Agency';
    }



    document.title = title;
    return (
        <div className='p-5'>
            <center>
                <Link to='/'>  <img className='lg:w-1/4' src={logo} alt="" /></Link>
            </center>
            <h1 className='text-4xl mt-2 font-bold'>Login to your account</h1>
            <div className='flex justify-center align-center'>
                <div className="w-full max-w-xs">
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" onChange={handleEmail} placeholder="yourmail@example.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" onChange={handlePassword} placeholder="******************" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                Sign In
                            </button>
                            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to="/resetpassword">
                                Forgot Password?
                            </Link>
                        </div>
                        <div className='mt-4'>
                            <h1 className='font-bold text-2xl'>or</h1>

                            <center>
                                <button onClick={() => signInWithGoogle(location, navigate)} className='text-black font-bold py-2 mt-2 px-4 border rounded flex justify-between align-center'><img className='login-logo mr-2' src="https://www.boostability.com/wp-content/uploads/2020/01/5847f9cbcef1014c0b5e48c8.png" alt="" /><span className='login-social-margin'>Login With Google</span></button>
                                <button onClick={() => signInWithGithub(location, navigate)} className='text-black font-bold py-2 px-4 mt-2 border rounded flex justify-between align-center'><img className='login-logo mr-2' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /><span className='login-social-margin'>Login With GitHub</span></button>
                            </center>
                            <p className='text-gray-500 mt-2'>
                                Don't have an account? <Link className='text-blue-500 hover:text-blue-800' to='/register'>Register</Link>
                            </p>
                        </div>
                    </form>
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2021 Creative Agency. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;