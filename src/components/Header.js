import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <span>boardl</span>
                            <span className="red">Y</span>
                        </Link>
                    </li>
                    <li className="nav__links">
                        <Link to="/boards">
                            <span>boards</span>
                        </Link>
                        <Link to="/about">
                            <span>about</span>
                        </Link>
                        <Link to="/contact">
                            <span>contact</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;