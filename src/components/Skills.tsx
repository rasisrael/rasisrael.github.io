import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
    return (
        <section id="skills" className="my-5">
            <h2 className="text-warning">Skills</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <FontAwesomeIcon icon={faHtml5} className="me-2" /> HTML,
                    <FontAwesomeIcon icon={faCss3Alt} className="ms-2 me-2" /> CSS,
                    SASS,
                    <FontAwesomeIcon icon={faJs} className="ms-2 me-2" /> JavaScript,
                    <FontAwesomeIcon icon={faReact} className="ms-2 me-2" /> React,
                    TypeScript,
                    <FontAwesomeIcon icon={faNodeJs} className="ms-2 me-2" /> Node.js,
                    <FontAwesomeIcon icon={faJava} className="ms-2 me-2" /> Java,
                    <FontAwesomeIcon icon={faPhp} className="ms-2 me-2" /> PHP,
                    <FontAwesomeIcon icon={faLaravel} className="ms-2 me-2" /> Laravel
                </li>
                <li className="list-group-item">
                    <FontAwesomeIcon icon={faDatabase} className="me-2" /> MSSQL, MySQL
                </li>
                <li className="list-group-item">Git, RESTful API, Amazon AWS</li>
                <li className="list-group-item">Computer Hardware</li>
            </ul>
        </section>
    );
};

export default Skills;
