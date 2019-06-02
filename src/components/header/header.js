import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Game List</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;