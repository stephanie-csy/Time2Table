import firebase from "firebase/app"
import "firebase/auth"

const c = {
    apiKey: "AIzaSyA0662SOxbjhFXKn6grgenniWR2reEzPbU",
    authDomain: "time2table-8114c.firebaseapp.com",
    projectId: "time2table-8114c",
    storageBucket: "time2table-8114c.appspot.com",
    messagingSenderId: "959920136596",
    appId: "1:959920136596:web:a65cc566d5c845b958af81"
  }

const config = firebase.initializeApp(c);

export const auth = config.auth()
export default config;