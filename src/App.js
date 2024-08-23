import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import NavigationBar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Languages from './components/Languages';
const App = () => {
    return (_jsxs("div", { className: "App", children: [_jsx(NavigationBar, {}), _jsxs("div", { className: "container my-5", children: [_jsx(Header, {}), _jsx(About, {}), _jsx(Education, {}), _jsx(WorkExperience, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Certificates, {}), _jsx(Languages, {})] })] }));
};
export default App;
