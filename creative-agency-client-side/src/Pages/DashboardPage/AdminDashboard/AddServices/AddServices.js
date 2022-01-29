import React, { useRef } from 'react';

const AddServices = () => {
    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const imgRef = useRef(null);
    const descriptionRef = useRef(null);

    const handleAddService = (e) => {

        const title = titleRef.current.value;
        const price = priceRef.current.value;
        const img = imgRef.current.files;
        const description = descriptionRef.current.value;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('price', price);
        formData.append('img', img[0]);
        formData.append('description', description);

        fetch('http://localhost:5000/services', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Service added succesfully.")
                    titleRef.current.value = '';
                    priceRef.current.value = '';
                    descriptionRef.current.value = '';
                }
            })

        e.preventDefault();

    }

    return (
        <div>
            <form onSubmit={handleAddService}>
                <div className='lg:flex'>
                    <div className='text-left'>
                        <label className='font-bold' htmlFor='service-title'>Service Title</label>
                        <input ref={titleRef} id='service-title' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name='service_title' placeholder="Enter Service Title" />
                    </div>
                    <div className='my-4 mt-8 w-full'>
                        <label className="shadow border rounded py-2 px-3 text-gray-700 bg-white focus:outline-none focus:shadow-outline" htmlFor="file"><i className="fas fa-cloud-upload-alt"></i> Select Service Image</label>
                        <input ref={imgRef} className="hidden w-full" type="file" id='file' />
                    </div>
                </div>
                <div className='text-left'>
                    <label className='font-bold' htmlFor='price'>Price</label>
                    <input ref={priceRef} id='price' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name='service_title' placeholder="Enter Service Price" />
                </div>
                <div className='text-left mt-3'>
                    <label className='font-bold' htmlFor="service-desc">Service Description</label>
                    <textarea ref={descriptionRef} id='service-desc' className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" rows={5} placeholder="Enter Service Description" />
                </div>
                <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddServices;