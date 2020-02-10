import React from 'react';
import './songlist.css';
import { connect } from 'react-redux';
import { playSong } from '../../redux/actions/actions';
import { bindActionCreators } from 'redux';

import PlayBtn from '../../util-components/play-btn/play-btn';
import LoveBtn from '../../util-components/love-btn/love-btn';

const Songlist = (props) => {

    const handlePlaySong = event => {
        const { songId } = event.currentTarget.dataset;
        const song = props.songs.find(song => song._id === parseInt(songId, 10));
        props.playSong(song);
    };

    return (
        <div className="songlist">
            {
                props.songs.map((song, i) => {
                    return <div className="songlist-song" key={i} onDoubleClick={handlePlaySong} data-song-id={song._id}>
                    <div className=""><PlayBtn songData={song}/></div>
                    <div className=""><LoveBtn songid={song._id}/></div>
                    <div>{song.title}</div>
                </div>
                })
            }
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({
    playSong: playSong
}, dispatch);


export default connect(null, mapDispatchToProps)(Songlist);