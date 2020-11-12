import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvamFr15LWm-nADalHgqIF8MCJTwHBj5Y",
  authDomain: "weather-app-178a5.firebaseapp.com",
  databaseURL: "https://weather-app-178a5.firebaseio.com",
  projectId: "weather-app-178a5",
  storageBucket: "weather-app-178a5.appspot.com",
  messagingSenderId: "699345628696",
  appId: "1:699345628696:web:ec66d444107cbd82c59d6d",
  measurementId: "G-KHPKJ0TJ1L",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
