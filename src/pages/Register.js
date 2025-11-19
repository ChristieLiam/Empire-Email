import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
            <div className="row justify-content-center w-100">
                <div className="col-md-8 col-lg-6">
                    
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-5">

                            <h2 className="card-title text-center fw-bold mb-4">Create Account</h2>
                            <p className="text-center text-muted mb-4">Join Empire Email today.</p>

                            {/* Registration Form */}
                            <form id="registration-form">
                                <div className="row">
                                    {/* First Name Field */}
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" htmlFor="i-fname">First Name</label>
                                        <input className="form-control" id="i-fname" name="fname" required type="text" />
                                    </div>

                                    {/* Last Name Field */}
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" htmlFor="i-lname">Last Name</label>
                                        <input className="form-control" id="i-lname" name="lname" required type="text" />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-email">Email Address</label>
                                    <input className="form-control" id="i-email" name="email" required type="email" />
                                </div>

                                {/* Phone & DOB Row */}
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" htmlFor="i-phone">Phone Number</label>
                                        <input className="form-control" id="i-phone" name="phone"
                                            pattern="^\d{10}$"
                                            placeholder="10-digit number"
                                            type="tel" />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label" htmlFor="i-dob">Date Of Birth</label>
                                        <input className="form-control" id="i-dob" name="dob" type="date" />
                                    </div>
                                </div>

                                {/* Password Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-pswd">Password</label>
                                    <input className="form-control" id="i-pswd" name="pswd"
                                        pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$"
                                        required
                                        title="Must contain uppercase, lowercase, digit, special char, and be 8+ chars"
                                        type="password" />
                                    <div className="form-text">
                                        Min 8 chars, 1 uppercase, 1 number, 1 special char.
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="i-pswd-match">Confirm Password</label>
                                    <input className="form-control" id="i-pswd-match" name="pswd-match" required type="password" />
                                </div>

                                {/* Submit Button */}
                                <div className="d-grid gap-3">
                                    <button className="btn btn-dark btn-lg rounded-pill shadow-sm" id="submit-btn" type="submit">
                                        Register
                                    </button>
                                </div>

                                {/* Link to Login */}
                                <div className="text-center mt-4">
                                    <p className="text-muted">
                                        Already have an account? <Link to="/login" className="text-decoration-none fw-bold">Login here</Link>
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

export default Register;