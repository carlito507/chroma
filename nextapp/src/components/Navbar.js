// components/Navbar.js
import React from 'react';
import Link from 'next/link';
import chroma from 'chroma-js';

const Navbar = () => {
    const generateRandomColor = () => {
        return chroma.random().hex();
    };

    return (
        <nav className="navbar is-fixed-top" style={{ backgroundColor: generateRandomColor() }}>
            <div className="container">
                <div className="navbar-brand">
                    <Link href="/">
                            My Stunning Portfolio
                    </Link>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <Link href="/about">
                            About
                        </Link>
                        <Link href="/projects">
                            Projects
                        </Link>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
