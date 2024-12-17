import "./Navbar.css"

import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="siteName">
                Sete Name
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
            </ul>
        </nav>
    )
}

export default Navbar
