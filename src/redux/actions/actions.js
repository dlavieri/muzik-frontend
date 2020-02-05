// DISPLAY MENU
export const TOGGLE_MENU = "TOGGLE_MENU";

export function toggleMenu() {
    return {
        type: TOGGLE_MENU,
    }
}

// AUDIO CONTROLS
export const PLAY_SONG = "SELECT_SONG";
export const PAUSE_SONG = "PAUSE_SONG";
export const RESUME_SONG = "RESUME_SONG";

export function playSong(song) {
    return {
        type: PLAY_SONG,
        song: song
    }
}

export function pauseSong(time) {
    return {
        type: PAUSE_SONG,
        pausedTime: time
    }
}

export function resumeSong() {
    return {
        type: RESUME_SONG
    }
}


// FETCH HOME PAGE DATA
export const FETCH_MOODS_PENDING = "FETCH_MOODS_PENDING";
export const FETCH_MOODS_SUCCESS = "FETCH_MOODS_SUCCESS";
export const FETCH_MOODS_ERROR = "FETCH_MOODS_ERROR";

export function fetchMoodsPending() {
    return {
        type: FETCH_MOODS_PENDING
    }
};

export function fetchMoodsSuccess(moods) {
    return {
        type: FETCH_MOODS_SUCCESS,
        moods: moods
    }
};

export function fetchMoodsError(err) {
    return {
        type: FETCH_MOODS_ERROR,
        error: err
    }
};

// FETCH PLAYLIST
export const FETCH_PLAYLIST_PENDING = "FETCH_PLAYLIST_PENDING";
export const FETCH_PLAYLIST_SUCCESS = "FETCH_PLAYLIST_SUCCESS";
export const FETCH_PLAYLIST_ERROR = "FETCH_PLAYLIST_ERROR";

export function fetchPlaylistPending() {
    return {
        type: FETCH_PLAYLIST_PENDING
    }
};

export function fetchPlaylistSuccess(playlist, songs) {
    return {
        type: FETCH_PLAYLIST_SUCCESS,
        playlist: playlist,
        songs: songs
    }
};

export function fetchPlaylistError(err) {
    return {
        type: FETCH_PLAYLIST_ERROR,
        error: err
    }
};


// FETCH PAGE FOR SPECIFIC MOOD
export const FETCH_MOOD_PENDING = "FETCH_MOOD_PENDING";
export const FETCH_MOOD_SUCCESS = "FETCH_MOOD_SUCCESS";
export const FETCH_MOOD_ERROR = "FETCH_MOOD_ERROR";

export function fetchMoodPending() {
    return {
        type: FETCH_MOOD_PENDING
    }
};

export function fetchMoodSuccess(mood, songs) {
    return {
        type: FETCH_MOOD_SUCCESS,
        mood: mood,
        songs: songs
    }
};

export function fetchMoodError(err) {
    return {
        type: FETCH_MOOD_ERROR,
        error: err
    }
};

// FETCH A USER PROFILE

export const FETCH_USER_PENDING = 'FETCH_USER_PENDING';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export function fetchUserPending() {
    return {
        type: FETCH_USER_PENDING
    }
};

export function fetchUserSuccess(userData) {
    return {
        type: FETCH_USER_SUCCESS,
        userData: userData
    }
};

export function fetchUserError(err) {
    return {
        type: FETCH_USER_ERROR,
        error: err
    }
};