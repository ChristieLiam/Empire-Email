// if on this site we must check if the user is logged in if the user is logged in auto send to dashboard    Story Status: Approved

import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return (
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center">

            <div className="row justify-content-center w-100">
                <div className="col-md-8 col-lg-5">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-5 text-center">
                            
                            <h1 className="card-title fw-bold mb-3">Empire Email</h1>

                            <p className="text-muted mb-5">
                                Experience the future of communication. <br />
                                Secure, fast, and professional.
                            </p>

                            <div className="d-grid gap-3">
                                <Link className="btn btn-dark btn-lg rounded-pill shadow-sm" to="/login">
                                    Login to Account
                                </Link>
                                <Link className="btn btn-outline-secondary btn-lg rounded-pill" to="/register">
                                    Create New Account
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;