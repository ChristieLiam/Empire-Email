import React from 'react';

function Register() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Card UI */}
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Create an account to login to this website</h2>

                            {/* Registration Form */}
                            <form id="registration-form">
                                {/* First Name Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-fname">First Name</label>
                                    <input className="form-control" id="i-fname" name="fname" required type="text" />
                                </div>

                                {/* Last Name Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-lname">Last Name</label>
                                    <input className="form-control" id="i-lname" name="lname" required type="text" />
                                </div>

                                {/* Email Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-email">Email</label>
                                    <input className="form-control" id="i-email" name="email" required type="email" />
                                </div>

                                {/* Phone Field (must be 10 digits) */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-phone">Phone Number</label>
                                    <input className="form-control" id="i-phone" name="phone"
                                           pattern="^\d{10}$"
                                           placeholder="Enter 10-digit phone number"
                                           type="tel" />
                                </div>

                                {/* Date of Birth Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-dob">Date Of Birth</label>
                                    <input className="form-control" id="i-dob" name="dob" type="date" />
                                </div>

                                {/* Password Field with complexity rules */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-pswd">Password</label>
                                    <input className="form-control" id="i-pswd" name="pswd"
                                           pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$"
                                           required
                                           title="At least one uppercase, one lowercase, one digit, one special character, and minimum 8 characters"
                                           type="password" />
                                </div>

                                {/* Confirm Password Field */}
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="i-pswd-match">Confirm Password</label>
                                    <input className="form-control" id="i-pswd-match" name="pswd-match" required type="password" />
                                </div>

                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary" id="submit-btn" type="submit">Register</button>
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