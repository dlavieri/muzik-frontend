import React from 'react';
import './menu-icon.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleMenu } from '../../redux/actions/actions';

function togg() {
    let toggler = document.getElementById("menuToggler");
    toggler.classList.toggle("__active");
    toggleMenu();
}

function MenuIcon (props) {
    
    const { toggleMenu } = props;
    function toggle() {
        togg();
        toggleMenu();
    }

    return (
        <div className="menu-icon" id="menuToggler" onClick={toggle}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    )

}


const mapDispatchToProps = dispatch => bindActionCreators({
    toggleMenu
}, dispatch)

export default connect(null, mapDispatchToProps)(MenuIcon);