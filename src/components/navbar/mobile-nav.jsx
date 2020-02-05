import React from 'react';

const MobileMenu = (props) => {
    return (
        <ul className="navbar-mobile">
            <li className="nav-mobile__li">
                <Link to="/home">
                    <i className="fas fa-home"></i>
                    <p>Home</p>
                </Link>
            </li>
            <li className="nav-mobile__li">
                <Link to={"/playlists/Liked-Tracks?user="+props.user}>
                    <i className="fas fa-heart"></i>
                    <p>Liked Tracks</p>
                </Link>
            </li>
            <li className="nav-mobile__li">
                <Link to={"/user/"+props.user}>
                    <i className="fas fa-user"></i>
                    <p>Profile</p>
                </Link>
            </li>
        </ul>
    )
}

export default MobileMenu;