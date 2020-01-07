import React from 'react';
import './songlist.css';

import PlayBtn from '../../util-components/play-btn/play-btn';
import LoveBtn from '../../util-components/love-btn/love-btn';

const Songlist = props => {

    return (
        <div className="songlist">
            {
                props.songs.map((song, i) => {
                    return <div className="songlist-song" key={i}>
                    <div className=""><PlayBtn songData={song}/></div>
                    <div className=""><LoveBtn songid={song._id}/></div>
                    <div>{song.title}</div>
                </div>
                })
            }
        </div>
    )
}

export default Songlist;