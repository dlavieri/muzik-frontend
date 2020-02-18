import { fetchMoodsPending, fetchMoodsSuccess, fetchMoodsError } from './actions';
import axios from 'axios';
import { apiPath } from '../../env';

function fetchMoods(token) {
    return dispatch => {
        dispatch(fetchMoodsPending());
        return axios.get(apiPath + "get-home-moods", 
            { headers: {Authorization: "Bearer: " + token} })
        .then(res => {
            if (res.error) {
                throw(res.error)
            }
            dispatch(fetchMoodsSuccess(res.data));
            return res.data;
        })
        .catch(err => {
            dispatch(fetchMoodsError(err));
        });
    }
};

export default fetchMoods;