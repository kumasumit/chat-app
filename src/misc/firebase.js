// eslint-disable-next-line no-unused-vars
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyB1vG_dFSEgye03SsrAXLr8zTc-gXeBP2M',
  authDomain: 'chat-web-app-ada7f.firebaseapp.com',
  databaseURL: 'https://chat-web-app-ada7f-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-ada7f',
  storageBucket: 'chat-web-app-ada7f.appspot.com',
  messagingSenderId: '335949561162',
  appId: '1:335949561162:web:0986734859ae584920d5b3',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
