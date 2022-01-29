import React, { useEffect } from 'react';
import useFirebase from '../../../../Hooks/useFirebase';

const ServiceList = () => {
    const { admin } = useFirebase();
    const [services, setServices] = React.useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleServiceDelete = (id) => {
        const proceed = window.confirm(`Are you sure you want to delete this package? [Note: This will delete the package from our database]
        `)
        if (proceed) {
            fetch(`http://localhost:5000/services/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Service Deleted Successfully. Reload the page to see update in the UI.')
                    }
                });
        }
    }
    console.log(admin);
    return (
        <div>
            {!admin && <h1 className='text-3xl text-red-500'>You are not an allowed to view this page</h1>}
            <table>
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">S.L.</th>
                        <th className="px-4 py-2 border">Title</th>
                        <th className="px-4 py-2 border">Description</th>
                        <th className="px-4 py-2 border">Price</th>
                        <th className="px-4 py-2 border">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map((service, index) => {
                            return (
                                <tr key={service._id}>
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{service.title}</td>
                                    <td className="px-4 py-2 border">{service.description}</td>
                                    <td className="px-4 py-2 border">{service.price}</td>
                                    <td className="px-4 py-2 border"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => handleServiceDelete(service._id)}>Delete</button></td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default ServiceList;