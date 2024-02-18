import { initializeApp } from 'firebase/app'
import { getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { getFirestore, doc, setDoc, getDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCVV2CsJ7mJehIs576YkuRMf_s92nyqw8w",
    authDomain: "ecommerce-c50fe.firebaseapp.com",
    projectId: "ecommerce-c50fe",
    storageBucket: "ecommerce-c50fe.appspot.com",
    messagingSenderId: "639418889999",
    appId: "1:639418889999:web:9322d7dfab507c0d43307a",
    measurementId: "G-KY685E5SHL"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

const db = getFirestore() //gets firestore database

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    } 
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => {
    return onAuthStateChanged(auth, callback)
}