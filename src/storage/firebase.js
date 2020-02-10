import * as firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD4cr5_zd042Nk_4O5OqMG9Rh5BN5Isp6s",
    authDomain: "muzik-app-51af6.firebaseapp.com",
    projectId: "muzik-app-51af6",
    storageBucket: "muzik-app-51af6.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;