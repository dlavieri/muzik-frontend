import React from 'react';
import './play-btn.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { playSong } from '../../redux/actions/actions';

const PlayBtn = (props) => {
    const { songData, playSong } = props;

    function dispatchPlay() {
        return playSong(songData)
    }

    return (
        <div className="playbtn__div">
            <i className="fas fa-play song__playbtn" onClick={dispatchPlay}></i>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    playSong: playSong
}, dispatch);


export default connect(null, mapDispatchToProps)(PlayBtn);