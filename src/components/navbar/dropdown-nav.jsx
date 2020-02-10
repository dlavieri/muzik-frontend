import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <ul className="navbar-ul__dropdown">
            <li><Link to="/home">Home</Link></li>
            <li><Link to={"/playlists/Liked-Tracks?user="+props.user}>Liked Tracks</Link></li>
        </ul>
    )
    }


export default function DropdownMenu (props) {

    if (!props.user) {
        return null;
    }

    let menu;
    if (props.menuOpen) {
        menu = <Menu user={props.user}/>;
        
    } else {
        menu = "";
    }

    return (
        <div className="navbar__dropdown">
            <ul className="navbar-ul__dropdown">
                {menu}
            </ul>
        </div>
    )
}
