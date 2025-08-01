import { addIntern, getIntern } from "./firebase.firestore";

const { getAuth, GoogleAuthProvider, signInWithPopup } = require("firebase/auth");
const { app } = require("./firebase.config");

const auth = getAuth(app);

async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();

    await signInWithPopup(auth, provider).then(async (res) => {
        const u = res.user;

        const user = {
            displayName: u.displayName,
            email: u.email,
            photoURL: u.photoURL,
            uid: u.uid
        }

        if (!await getIntern(user.uid)) {
            await addIntern(user);
        }

        localStorage.setItem("user", JSON.stringify(user.uid));

    });
}
export { loginWithGoogle }