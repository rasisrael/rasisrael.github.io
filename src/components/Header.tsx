import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center py-5">
            <h1 className="display-4">Israel Uzcategui</h1>
            <p>
                <a href="https://www.linkedin.com/in/israeluzcat" className="btn btn-primary mx-2">LinkedIn</a>
                <a href="https://github.com/rasisrael" className="btn btn-dark mx-2">GitHub</a>
            </p>
        </header>
    );
};

export default Header;
