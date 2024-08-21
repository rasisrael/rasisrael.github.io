import React from 'react';

const Education: React.FC = () => {
    return (
        <section id="education" className="my-5">
            <h2 className="text-warning">Education</h2>
            <div className="mb-3">
                <h3 className="h5">AEC Full Stack Developer - John Abbott College</h3>
                <p>10/2023 - Present, Montreal, Quebec</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Programming</li>
                    <li className="list-group-item">Web Development</li>
                    <li className="list-group-item">Application Development</li>
                    <li className="list-group-item">Cloud Computing</li>
                    <li className="list-group-item">Databases</li>
                    <li className="list-group-item">Web Design</li>
                    <li className="list-group-item">Data Structures </li>
                    <li className="list-group-item">Web Services </li>
                </ul>
            </div>
            <div>
            <h3 className="h5">BA Cinematography - University of the Andes</h3>
                <p>08/2007 - 11/2013, Mérida, Venezuela</p>
            </div>
        </section>
    );
};

export default Education;
