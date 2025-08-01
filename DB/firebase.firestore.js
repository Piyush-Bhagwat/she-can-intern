import { addDoc, collection, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import { app } from './firebase.config'

const db = getFirestore(app);
const internRef = collection(db, "interns");

async function addIntern(intern) {
    await setDoc(doc(db, "interns", intern.uid), intern);
}

async function getIntern(uid) {
    const docRef = doc(db, "interns", uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        return docSnap.data();
    } else return false;
}

export { addIntern, getIntern }