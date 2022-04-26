var firebaseConfig = {
    apiKey: "AIzaSyCl4JM9G4acNU_blrMRc0NEshYD3eqIS74",
    authDomain: "ourproject-eb36f.firebaseapp.com",
    projectId: "ourproject-eb36f",
    storageBucket: "ourproject-eb36f.appspot.com",
    messagingSenderId: "530049073551",
    appId: "1:530049073551:web:924f5e6ceaef76827ccbfa",
    measurementId: "G-VQQGTKHFBB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   let db = firebase.firestore();
   let auth = firebase.auth();