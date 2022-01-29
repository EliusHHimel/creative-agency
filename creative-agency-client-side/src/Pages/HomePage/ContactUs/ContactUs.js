import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init("user_poqY0f1iw085u0eDga4RV");

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_yi98w5j', 'template_69k43s8', form.current, "user_poqY0f1iw085u0eDga4RV")
            .then((result) => {
                if (result.text === 'OK') {
                    alert('Message Sent Successfully');
                }
            }, (error) => {
                alert(error.text);
            });
    };

    return (
        <div className='lg:grid xl:grid grid-cols-2 p-5 bg-orange-400' id='contact'>
            <div className='text-left p-5'>
                <h1 className='text-3xl font-bold'>Let us handle your project, professionally.</h1>
                <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
            </div>
            <div className='p-5'>
                <form className='w-full max-w-sm' ref={form} onSubmit={sendEmail}>
                    <input className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type="text" name="user_name" placeholder='Your name/company name' />
                    <input className='mt-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' type="email" name="user_email" placeholder='Your email address' />
                    <textarea className='mt-3 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500' rows={5} name="message" placeholder='You message' />
                    <input className='mt-1 w-full shadow bg-purple-500 rounded hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded' type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactUs;