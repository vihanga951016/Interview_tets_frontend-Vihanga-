import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div >
            <ul className="navbar">
                <Link to="/"><li id="line"><a id="link" href="/">Home</a></li></Link>
                <Link to="/add"><li id="line"><a id="link" href="/add">Add Note</a></li></Link>
            </ul>
            

        </div>
    )
}

export default NavBar
