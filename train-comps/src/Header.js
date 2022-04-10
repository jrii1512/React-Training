import React from "react"
import logo from './logo.svg';


const Header = () => {
    return (
        <div>
        <header className = "header">
            <nav className = "nav">
                <img src={logo} className = "logo" alt = "logo"/>
                <ul className = "nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        <hr></hr>
        </div>
    )
}

export default Header;