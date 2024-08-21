import React from 'react';
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Languages from './components/Languages';

const App: React.FC = () => {
    return (
        <div className="App">
            <NavigationBar />
            <div className="container my-5">
                <Header />
                <About />
                <Education />
                <WorkExperience />
                <Skills />
                <Projects />
                <Certificates />
                <Languages />
            </div>
        </div>
    );
};

export default App;
