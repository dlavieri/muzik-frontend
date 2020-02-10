import { fetchPlaylistPending, fetchPlaylistSuccess, fetchPlaylistError } from './actions';
import axios from 'axios';

function fetchPlaylist(playlistName, token) {
    return dispatch => {
        dispatch(fetchPlaylistPending());
        axios.get(`https://desolate-shore-33045.herokuapp.com/playlists/${playlistName}`, 
            { headers: {Authorization: "Bearer: " + token} })
        .then(res => {
            if (res.error) {
                throw(res.error);
            }
            dispatch(fetchPlaylistSuccess(res.data.name, res.data.songs));
            return res.data;
        })
        .catch(err => {
            dispatch(fetchPlaylistError(err));
        })
    }
}

export default fetchPlaylist;