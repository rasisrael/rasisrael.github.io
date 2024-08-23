import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faJava, faPhp, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
const Skills = () => {
    return (_jsxs("section", { id: "skills", className: "my-5", children: [_jsx("h2", { className: "text-warning", children: "Skills" }), _jsxs("ul", { className: "list-group", children: [_jsxs("li", { className: "list-group-item", children: [_jsx(FontAwesomeIcon, { icon: faHtml5, className: "me-2" }), " HTML,", _jsx(FontAwesomeIcon, { icon: faCss3Alt, className: "ms-2 me-2" }), " CSS, SASS,", _jsx(FontAwesomeIcon, { icon: faJs, className: "ms-2 me-2" }), " JavaScript,", _jsx(FontAwesomeIcon, { icon: faReact, className: "ms-2 me-2" }), " React, TypeScript,", _jsx(FontAwesomeIcon, { icon: faNodeJs, className: "ms-2 me-2" }), " Node.js,", _jsx(FontAwesomeIcon, { icon: faJava, className: "ms-2 me-2" }), " Java,", _jsx(FontAwesomeIcon, { icon: faPhp, className: "ms-2 me-2" }), " PHP,", _jsx(FontAwesomeIcon, { icon: faLaravel, className: "ms-2 me-2" }), " Laravel"] }), _jsxs("li", { className: "list-group-item", children: [_jsx(FontAwesomeIcon, { icon: faDatabase, className: "me-2" }), " MSSQL, MySQL"] }), _jsx("li", { className: "list-group-item", children: "Git, RESTful API, Amazon AWS" }), _jsx("li", { className: "list-group-item", children: "Computer Hardware" })] })] }));
};
export default Skills;
