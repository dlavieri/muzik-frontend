import { fetchMoodsPending, fetchMoodsSuccess, fetchMoodsError } from './actions';
import axios from 'axios';

function fetchMoods(token) {
    return dispatch => {
        dispatch(fetchMoodsPending());
        axios.get(`https://desolate-shore-33045.herokuapp.com/get-home-moods`, 
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