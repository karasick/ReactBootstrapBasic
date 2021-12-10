import React, {useContext, useState} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {AuthContext} from "../../../context";

const BootstrapNavbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    <Link className="navbar-brand" to="/">ReactBootstrap App</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/posts">Posts</Link>
                        <Link className="nav-link" to="/about">About</Link>
                        <Link className="nav-link" to="/login">Login</Link>
                        <Button variant="ml-3 btn-outline-secondary float-end" onClick={logout}>Logout</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BootstrapNavbar;

// <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid">
//         <Link className="navbar-brand" to="/">ReactBootstrap app</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
//                 data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//                 aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                     <a className="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/posts">Posts</Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/about">About</Link>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>