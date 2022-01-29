import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const ProtectedRoute = ({ children }) => {
    let { user, loading } = useFirebase();
    let location = useLocation();
    if (loading) {
        return <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

        </svg>
    }

    if (!user.email) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;