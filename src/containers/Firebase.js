import firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyCDVFpxecxVgx5TqNfjUqmV6hrCa9LVf_c",
  authDomain: "cms-database-96d72.firebaseapp.com",
  databaseURL: "https://cms-database-96d72-default-rtdb.firebaseio.com",
  projectId: "cms-database-96d72",
  storageBucket: "cms-database-96d72.appspot.com",
  messagingSenderId: "481881299311",
  appId: "1:481881299311:web:ba4d7edbe7848a8bf0709a",
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb;
