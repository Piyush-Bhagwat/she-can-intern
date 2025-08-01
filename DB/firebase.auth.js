import { app } from "./firebase.config";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

let auth;
if (typeof window !== "undefined") {
    auth = getAuth(app); // Only runs in browser
}

async function loginWithGoogle() {
    if (!auth) return; // avoid running on server

    const provider = new GoogleAuthProvider();

    const res = await signInWithPopup(auth, provider);
    const u = res.user;

    const user = {
        displayName: u.displayName,
        email: u.email,
        photoURL: u.photoURL,
        uid: u.uid
    };

    const { getIntern, addIntern } = await import("./firebase.firestore");

    if (!(await getIntern(user.uid))) {
        await addIntern(user);
    }

    localStorage.setItem("user", JSON.stringify(user.uid));
}

export { loginWithGoogle };
