import React, { Component } from 'react';
import '../styles/Header.scss';

class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <span>boardl</span>
                        <span className="red">Y</span>
                    </li>
                    <li className="nav__links">
                        <span>boards</span>
                        <span>about</span>
                        <span>contact</span>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;