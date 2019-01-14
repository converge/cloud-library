import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

export const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
};
firebase.initializeApp(config)
firebase.firestore().settings({timestampsInSnapshots: true})

export default firebase