import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className="container flex-grow-1 d-flex align-items-center justify-content-center py-5">
            <div className="row justify-content-center w-100">
                <div className="col-md-8 col-lg-7">
                    
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-body p-5 text-center">
                            
                            <div className="mb-3">
                                <span className="display-4">👨‍💻</span>
                            </div>

                            <h2 className="card-title fw-bold mb-2">About Empire Email</h2>
                            <p className="text-muted mb-4">Built by <span className="fw-bold text-dark">Liam Christie</span></p>

                            <hr className="my-4 opacity-25" />

                            <div className="text-start mb-4">
                                <h5 className="fw-bold">Project Evolution</h5>
                                <p className="text-muted">
                                    This application began as an academic assignment and has been completely re-engineered as a personal portfolio project. 
                                </p>
                                <p className="text-muted">
                                    I revamped the original codebase to run on a modern <strong>React</strong> architecture, integrating a fully functional <strong>Backend & Frontend</strong> system. The goal was to transform a simple school concept into a production-ready web application.
                                </p>
                            </div>

                            <div className="text-start mb-5">
                                <h5 className="fw-bold mb-3">Tech Stack & Deployment</h5>
                                <div className="d-flex flex-wrap gap-2">
                                    <span className="badge bg-dark rounded-pill p-2 px-3">
                                        ⚛️ React.js
                                    </span>
                                    <span className="badge bg-success rounded-pill p-2 px-3">
                                        🔄 Full Stack
                                    </span>
                                    <span className="badge bg-warning text-dark rounded-pill p-2 px-3">
                                        ☁️ AWS Amplify
                                    </span>
                                    <span className="badge bg-info text-dark rounded-pill p-2 px-3">
                                        🚀 Netlify
                                    </span>
                                    <span className="badge bg-danger text-dark rounded-pill p-2 px-3">
                                        🎨 Bootstrap
                                    </span>
                                </div>
                            </div>

                            <Link to="/" className="btn btn-outline-dark rounded-pill px-5 py-2">
                                Back to Home
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;