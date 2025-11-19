import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
            <div className="row justify-content-center w-100">
                <div className="col-md-8 col-lg-5">
                    
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-5">

                            <h2 className="card-title text-center fw-bold mb-4">Welcome Back</h2>
                            <p className="text-center text-muted mb-4">Please login to access your email.</p>

                            {/* Login Form */}
                            <form id="login-form">
                                {/* Email Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-email">Email Address</label>
                                    <input className="form-control" id="i-email" name="email" required type="email" placeholder="name@example.com" />
                                </div>

                                {/* Password Field */}
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="i-pswd">Password</label>
                                    <input className="form-control" id="i-pswd" name="pswd" required type="password" placeholder="Enter your password" />
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid gap-3">
                                    <button className="btn btn-dark btn-lg rounded-pill shadow-sm" id="submit-btn" type="submit">
                                        Login
                                    </button>
                                </div>

                                {/* Link to Register */}
                                <div className="text-center mt-4">
                                    <p className="text-muted">
                                        Don't have an account? <Link to="/register" className="text-decoration-none fw-bold">Create one</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;