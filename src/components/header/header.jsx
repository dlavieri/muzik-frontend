import React from 'react';
import './header.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../../redux/actions/auth-actions';
import MenuIcon from '../../util-components/menu-icon/menu-icon';

const Header = props => {
    if (!props.user) {
        return null
    }
    const logout = () => {
        props.logout();
    }

    return (
        <header className="app-header">
            <MenuIcon/>
            <div className="logout-link" onClick={logout}>Logout</div>
        </header>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    logout: logout
}, dispatch);

export default connect(null, mapDispatchToProps)(Header);