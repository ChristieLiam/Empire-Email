import React from 'react';
import { Link } from 'react-router-dom';


// if on this site we must check if the user is logged in if the user is logged in auto send to dashboard 


function Welcome() {
    return (
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <h1 class="card-title">Empire Email</h1>

                            <p class="text-muted">Welcome! Please login or register to continue.</p>

                            <div class="d-grid gap-2">
                                <Link class="btn btn-primary btn-lg" to="/login">Login</Link>
                                <Link class="btn btn-outline-secondary btn-lg" to="/register">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;