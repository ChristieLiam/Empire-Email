import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container mt-5 text-center">
            <h1 className="display-1">404 - Page Not Found</h1>
            <p className="lead">Sorry, we couldn't find the page you're looking for.</p>

            <Link to="/" className="btn btn-dark btn">Go Back</Link>
        </div>
    );
}

export default NotFound;