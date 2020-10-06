import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCfLQWsK6QDc1rPhXGowl5CFv1r4oDzwsg",
    authDomain: "twitter-clone-hunter.firebaseapp.com",
    databaseURL: "https://twitter-clone-hunter.firebaseio.com",
    projectId: "twitter-clone-hunter",
    storageBucket: "twitter-clone-hunter.appspot.com",
    messagingSenderId: "273010173498",
    appId: "1:273010173498:web:5fba40e21ae17d9ea0b703",
    measurementId: "G-1M7W2GNWVE"
  };

  const MuhfirstFirebaseApp=firebase.initializeApp(firebaseConfig);

  const twittyDB = MuhfirstFirebaseApp.firestore();

  export default twittyDB;