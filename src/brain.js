import {
    initializeApp
} from 'firebase/app';
import {
    firebaseConfig
} from './constants.js'

import {
    getFirestore
} from "firebase/firestore";
import {
    doc,
    setDoc,
    getDoc
} from "firebase/firestore";

import store from "./redux/store";
import { setScoreState } from './redux/slices/interfaceSlice.js';


const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getFirestore(app);


export async function setHighScore(newScore) {
  await setDoc(doc(db, "snake", "score"), {score: newScore});
}


 
export async function getHighScore(){
    const docRef = doc(db, "snake", "score");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        store.dispatch(setScoreState(docSnap.data().score))
        return (docSnap.data().score)
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return (0)
    }
}

getHighScore();
