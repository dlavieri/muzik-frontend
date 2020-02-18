import { fetchPlaylistPending, fetchPlaylistSuccess, fetchPlaylistError } from './actions';
import axios from 'axios';
import { apiPath } from '../../env';

function fetchPlaylist(playlistName, token) {
    return dispatch => {
        dispatch(fetchPlaylistPending());
        return axios.get(apiPath + "playlists/" + playlistName, 
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