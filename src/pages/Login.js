import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Card UI for Login Form */}
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Login to access your email</h2>

                            {/* Login Form */}
                            <form id="registration-form">
                                {/* Email Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-email">Email</label>
                                    <input className="form-control" id="i-email" name="email" required type="email" />
                                </div>

                                {/* Password Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-pswd">Password</label>
                                    <input className="form-control" id="i-pswd" name="pswd" required type="password" />
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary" id="submit-btn" type="submit">Login</button>
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