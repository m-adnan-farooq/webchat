import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCNdKbfIWapr7OYUylEYltCW3C-U4hGD7Y",
    authDomain: "webchat-adnan.firebaseapp.com",
    databaseURL: "https://webchat-adnan.firebaseio.com",
    projectId: "webchat-adnan",
    storageBucket: "webchat-adnan.appspot.com",
    messagingSenderId: "635313228176",
    appId: "1:635313228176:web:e9decf5479ee0fdc58cb15"
  };

var fire = firebase.initializeApp(firebaseConfig);

export default fire;