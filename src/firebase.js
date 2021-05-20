import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyB0OMjnsn7WFX8ermJmHn0hzjS_5qcW4wE',
  authDomain: 'mercury-4b53f.firebaseapp.com',
  databaseURL: 'https://mercury-4b53f-default-rtdb.firebaseio.com',
  projectId: 'mercury-4b53f',
  storageBucket: 'mercury-4b53f.appspot.com',
  messagingSenderId: '988749835537',
  appId: '1:988749835537:web:96f124094f29644b6130b0',
  measurementId: 'G-JW5H4QCZKF'
}

const app = firebase.initializeApp(firebaseConfig)

export const db = app.database()
export const dataRef = db.ref('data')
