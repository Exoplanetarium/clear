// Import the functions you need from the SDKs you need
import React from "react";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let analytics;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLokiLJXUbui5xd3Xd3RIOgvVM4Yc1u8g",
  authDomain: "clearapp-81565.firebaseapp.com",
  projectId: "clearapp-81565",
  storageBucket: "clearapp-81565.appspot.com",
  messagingSenderId: "443408997906",
  appId: "1:443408997906:web:53023354e9b1edbed702cb",
  measurementId: "G-W6QH7706Z8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
export const auth = getAuth(app);

export function getMyAnalytics() {
  if (typeof window !== 'undefined' && !analytics) {
    analytics = getAnalytics(app);
  }
  return analytics;
}


