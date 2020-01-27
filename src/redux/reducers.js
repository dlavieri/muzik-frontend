import { FETCH_MOODS_PENDING, FETCH_MOODS_SUCCESS, FETCH_MOODS_ERROR } from './actions/actions';
import { FETCH_MOOD_PENDING, FETCH_MOOD_SUCCESS,  FETCH_MOOD_ERROR } from './actions/actions';
import { FETCH_PLAYLIST_PENDING, FETCH_PLAYLIST_SUCCESS, FETCH_PLAYLIST_ERROR } from './actions/actions';
import { PLAY_SONG, RESUME_SONG, PAUSE_SONG } from './actions/actions';
import { LOGIN } from './actions/auth-actions';
import { TOGGLE_MENU } from './actions/actions';

const initialState = {
    // change back to false & null
    isLoggedIn: true,
    user: "User",
    token: null,
    menuOpen: false,

    moodsFetching: false,
    moods: [],
    error: null,

    playlistFetching: false,
    currentPlaylist: null,
    songs: [],

    isPlaying: false,
    songDetails: null,
    pausedTime: 0,
    playBtn: true,
    pauseBtn: false,
    resumeBtn: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            console.log("logging in")
            return {
                ...state,
                isLoggedIn: true,
                token: action.token,
                user: action.user
            };
        case TOGGLE_MENU:
            return {
                ...state,
                menuOpen: !state.menuOpen
            };
        case FETCH_MOODS_PENDING:
            return {
                ...state,
                moodsFetching: true
            };
        case FETCH_MOODS_SUCCESS:
            return {
                ...state,
                moodsFetching: false,
                moods: action.moods
            };
        case FETCH_MOODS_ERROR:
            return {
                ...state,
                moodsFetching: false,
                error: action.error
            };
        case FETCH_MOOD_PENDING:
            return {
                ...state,
                playlistFetching: true
            };
        case FETCH_MOOD_SUCCESS:
            return {
                ...state,
                playlistFetching: false,
                currentPlaylist: action.mood,
                songs: action.songs
            };
        case FETCH_MOOD_ERROR:
            return {
                ...state,
                playlistFetching: false,
                error: action.error
            };
        case FETCH_PLAYLIST_PENDING:
                return {
                    ...state,
                    playlistFetching: true
                };
        case FETCH_PLAYLIST_SUCCESS:
            return {
                ...state,
                playlistFetching: false,
                currentPlaylist: action.playlist,
                songs: action.songs
            };
        case FETCH_PLAYLIST_ERROR:
            return {
                ...state,
                playlistFetching: false,
                error: action.error
            }
        case PLAY_SONG:
            return {
                ...state,
                songDetails: action.song,
                isPlaying: true,
                pauseBtn: true,
                playBtn: false,
                resumeBtn: false,
            }
        case PAUSE_SONG:
            return {
                ...state,
                isPlaying: false,
                pauseBtn: false,
                playBtn: false,
                resumeBtn: true,
                pausedTime: action.pausedTime
            }
        case RESUME_SONG:
            return {
                ...state,
                isPlaying: true,
                pauseBtn: true,
                playBtn: false,
                resumeBtn: false,
            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer;
