import React from 'react';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="my-5">
            <h2 className="text-warning">Projects</h2>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Hotel Booking Website</h5>
                    <p className="card-text">Built with PHP, Laravel & MySQL.</p>
                </div>
            </div>
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Medical Booking System</h5>
                    <p className="card-text">Developed using React, Node.JS & MySQL.</p>
                    <a href="https://github.com/rasisrael/MedAppSys">View on GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
