import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Home</Link>

                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login" onClick={localStorage.clear()}>Logout</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
};

export default Nav;