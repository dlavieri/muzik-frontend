import * as firebase from 'firebase/app';
import 'firebase/storage';
import { firebaseKey } from '../env';

const firebaseConfig = {
    apiKey: firebaseKey,
    authDomain: "muzik-app-51af6.firebaseapp.com",
    projectId: "muzik-app-51af6",
    storageBucket: "muzik-app-51af6.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;