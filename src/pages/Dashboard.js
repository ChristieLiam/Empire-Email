import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div className="container mt-5 text-center">
            <h1 className="display-1">503 Service Unavailable</h1>
            <p className="lead">Dashboard Under Construction</p>

            <Link to="/" className="btn btn-dark btn">Go Back</Link>
        </div>
    );
}

export default Dashboard;