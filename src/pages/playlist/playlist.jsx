import React, { Component } from 'react';
import './playlist.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchMood from '../../redux/actions/fetchMood';
import fetchPlaylist from '../../redux/actions/fetchPlaylist';

import SongList from '../../components/songlist/songlist';
import Container from '../../components/container/container';

class PlaylistPage extends Component {

    componentDidMount = () => {
        const { fetchMood, fetchPlaylist, token, match } = this.props;
        const mood = match.url.slice(0,6) === "/moods";
        const playlistName = match.params.playlistid;
        
        if (mood) {
            const moodId = this.props.match.params.moodid;
            fetchMood(moodId, token);
        }
        if (playlistName) {
            fetchPlaylist(playlistName, token);
        }

        
    }

    render() {
        const { currentPlaylist, songs } = this.props;
        return (
            <Container>
                <div className="playlist">
                    <h4>{currentPlaylist}</h4>
                    <SongList songs={songs} />
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPlaylist: state.currentPlaylist,
        songs: state.songs,
        token: state.token
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchMood: fetchMood,
    fetchPlaylist: fetchPlaylist
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistPage);