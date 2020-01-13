import React from 'react';
import './love-btn.css';
import axios from 'axios';
import { connect } from 'react-redux';

const LoveBtn = (props) => {

    function dispatchLove(e) {
        e.stopPropagation();
        const active = e.target.classList.contains("__loved-active");
        const { songid, token } = props;

        if(active) {
            return null
        }
        axios.post(`https://desolate-shore-33045.herokuapp.com/love-song/${songid}`, 
            {playlist: "Liked Tracks", headers: {Authorization: "Bearer: " + token}})
        .then();

        e.target.classList.toggle("__loved-active");
    }

    return (
        <div onClick={dispatchLove} className="__lovebtn"></div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
};

export default connect(mapStateToProps)(LoveBtn);