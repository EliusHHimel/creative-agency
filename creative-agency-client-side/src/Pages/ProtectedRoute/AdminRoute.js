import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const AdminRoute = ({ children }) => {
    const { user, admin } = useFirebase();
    let location = useLocation();
    const [isAdmin, setIsAdmin] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/users`)
            .then(res => res.json())
            .then(data => {
                const foundAdmin = data.find(admin => user.email === admin.email && admin.role === 'admin');
                if (foundAdmin) {
                    setIsAdmin(true);
                    setLoading(false);
                }
            })
    }, [user.email]);


    if (loading) {
        return <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

        </svg>
    }

    if (user.email && isAdmin) {
        return children;
    }
    console.log(user.email, admin);

    return <Navigate to="/login" state={{ from: location }} />;
};

export default AdminRoute;