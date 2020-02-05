import { fetchUserPending, fetchUserSuccess, fetchUserError } from './actions';
import axios from 'axios';


function fetchUserData(user, token) {
    return dispatch => {
        dispatch(fetchUserPending());
        // axios get user data
    }
} 


export default fetchUserData;