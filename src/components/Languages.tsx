import React from 'react';

const Languages: React.FC = () => {
    return (
        <section id="languages" className="my-5">
            <h2 className="text-warning">Languages</h2>
            <ul className="list-group">
                <li className="list-group-item">French (100/100)</li>
                <li className="list-group-item">English (100/100)</li>
                <li className="list-group-item">Spanish (100/100)</li>
            </ul>
        </section>
    );
};

export default Languages;
