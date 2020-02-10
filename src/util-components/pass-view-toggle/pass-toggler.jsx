import React from 'react';
import './pass-toggler.css';

const PassToggler = props => {

    const handleToggle = event => {
        let target = event.currentTarget;
        target.classList.toggle("fa-eye-slash");
        target.classList.toggle("fa-eye");

        let input = document.getElementById("password");
        if (input.type === "password") {
            input.type = "text"
        } else {
            input.type = "password"
        }
    }
    return (
        <div className="pass-togg-container">
            <i className="far fa-eye-slash" onClick={handleToggle}/>
        </div>
    )
}

export default PassToggler;