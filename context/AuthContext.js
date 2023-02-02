import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth' 
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext() /* Context for login authentication */

/* User account creation/signin */
export function AuthContextProvider({children}) {
    const [user, setUser] = useState({}) // set when user is authenticated.
    const [email, setEmail] = useState("")
    function signUp( email, password) {
        createUserWithEmailAndPassword(auth, email, password).catch(function(error) {
            alert(error.message)
        })
        setDoc(doc(db, 'users', email), { // create new entry for each user created
            savedShows: []
        })
    }

    /* login w/ firebase */
    function logIn(email, password) { 
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    /* logout w/ firebase */
    function logOut() {
        return signOut(auth)
    }  

    useEffect(() => {
        // observer for changes when users sign in/out
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> { 
            setUser(currentUser) // setting state to the currentUser signed in to db
        })
        return () => {
            unsubscribe();
        }
    })

    
    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user, email, setEmail}}> {/* 'Provides' these value to whoever is using the 'AuthContext' */}
            {children}
        </AuthContext.Provider>
    )
}

/* Creates a single UserAuth() so we dont create multiple */
export function UserAuth() {
    return useContext(AuthContext)
}