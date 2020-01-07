import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const NavBar = props => {
    if(!props.isLoggedIn) {
        return null
    }

    return (
        <div className="navbar">
            <ul className="navbar-ul">
                <li><Link to="/home">Home</Link></li>
                {/* <li><Link to="playlists/:mostplayed">Most Played</Link></li>
                <li><Link to="playlists/:recent">Recently Played</Link></li> */}
                <li><Link to={"/playlists/Liked-Tracks?user="+props.user}>Liked Tracks</Link></li>
            </ul>
        </div>
    )
}

export default NavBar;