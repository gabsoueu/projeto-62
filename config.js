import firebase from "firebase";

//inicialize seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyBwD-oO-HlrIaY4qACeI-22GHaXpkCQGHg",
  authDomain: "pro-60-313ce.firebaseapp.com",
  databaseURL: "https://pro-60-313ce-default-rtdb.firebaseio.com",
  projectId: "pro-60-313ce",
  storageBucket: "pro-60-313ce.appspot.com",
  messagingSenderId: "874892396124",
  appId: "1:874892396124:web:65cb01ffaee9d307698899",
  measurementId: "G-ES0H2SHJTW"
};

  firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  