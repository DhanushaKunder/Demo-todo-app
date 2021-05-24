import firebase from "firebase";


var firebaseConfig = {
    apiKey: "AIzaSyDCz7gprtrSAzWSa1YQ30xIjUSD4zgzdVw",
    authDomain: "todo-app-dhanusha.firebaseapp.com",
    projectId: "todo-app-dhanusha",
    storageBucket: "todo-app-dhanusha.appspot.com",
    messagingSenderId: "1070807062227",
    appId: "1:1070807062227:web:b90459a17d0360365e6626"
  };

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };