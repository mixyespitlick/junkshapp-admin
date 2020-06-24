import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
export const db = firebase.firestore();
export default firebase;
