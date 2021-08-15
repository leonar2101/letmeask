import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/database'

  const firebaseConfig = {
    apiKey: "AIzaSyCHUdCpT5w9IkDYAuYByTfgE03BXCWoy7w",
    authDomain: "letmeask-5b9e2.firebaseapp.com",
    databaseURL: "https://letmeask-5b9e2-default-rtdb.firebaseio.com",
    projectId: "letmeask-5b9e2",
    storageBucket: "letmeask-5b9e2.appspot.com",
    messagingSenderId: "499554733192",
    appId: "1:499554733192:web:3015a57d0e75829910233d"
  };

    firebase.initializeApp(firebaseConfig);

     const auth = firebase.auth();
     const database = firebase.database();

     export { firebase, auth, database}
 