import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navbar, Nav } from 'react-bootstrap';
const NavigationBar = () => {
    return (_jsxs(Navbar, { bg: "dark", variant: "dark", expand: "lg", sticky: "top", children: [_jsx(Navbar.Brand, { href: "#header", children: "My Portfolio" }), _jsx(Navbar.Toggle, { "aria-controls": "basic-navbar-nav" }), _jsx(Navbar.Collapse, { id: "basic-navbar-nav", children: _jsxs(Nav, { className: "me-auto", children: [_jsx(Nav.Link, { href: "#about", children: "About" }), _jsx(Nav.Link, { href: "#education", children: "Education" }), _jsx(Nav.Link, { href: "#experience", children: "Experience" }), _jsx(Nav.Link, { href: "#skills", children: "Skills" }), _jsx(Nav.Link, { href: "#projects", children: "Projects" }), _jsx(Nav.Link, { href: "#certificates", children: "Certificates" }), _jsx(Nav.Link, { href: "#languages", children: "Languages" })] }) })] }));
};
export default NavigationBar;
