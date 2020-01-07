import React from 'react';
import './header.css';

import MenuIcon from '../../util-components/menu-icon/menu-icon';

const Header = props => {
    if (!props.user) {
        return null
    }

    return (
        <header className="app-header">
            <MenuIcon/>
            <div>Hello, {props.user}</div>
        </header>
    )
}

export default Header;