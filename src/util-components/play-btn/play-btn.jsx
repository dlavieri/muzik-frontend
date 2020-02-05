import React from 'react';
import './play-btn.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { playSong } from '../../redux/actions/actions';

const PlayBtn = (props) => {
    const { songData, playSong, songDetails } = props;

    let isPlaying;
    if (!songData || !songDetails){
        isPlaying = false
    } else if (songData._id === songDetails._id) {
        isPlaying = true
    } else {
        isPlaying = false
    }

    return (
        <div className="playbtn__div">
            {isPlaying ? 
                <i className="fas fa-volume-up song__playbtn"></i> :
                <i className="fas fa-play song__playbtn" onClick={() => playSong(songData)}></i>
            } 
        </div>
    )
}

const mapStateToProps = state => {
    return {
        songDetails: state.songDetails
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    playSong: playSong
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(PlayBtn);