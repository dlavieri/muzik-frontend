import { fetchMoodPending, fetchMoodSuccess, fetchMoodError } from './actions';
import axios from 'axios';
import { apiPath } from '../../env';

function fetchMood(moodId, token) {
    return dispatch => {
        dispatch(fetchMoodPending());
        return axios.get(apiPath + "moods/" + moodId , 
            {headers: {Authorization: "Bearer: " + token}})
        .then(res => {
            if (res.error) {
                throw(res.error)
            }
            dispatch(fetchMoodSuccess(res.data.name, res.data.songs));
            return res.data;
        })
        .catch(err => {
            dispatch(fetchMoodError(err));
        });
    }
}

export default fetchMood;