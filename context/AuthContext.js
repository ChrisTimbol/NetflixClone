import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState({})

    function signUp( email, password) {
        createUserWithEmailAndPassword(auth, email, password).catch(function(error) {
            alert(error.message)
        })
        setDoc(doc(db, 'users', email), { // create new db for each user created
            savedShows: []
        })
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logOut() {
        return signOut(auth)
    }  

    useEffect(() => {
        // observer for changes when users sign in/out
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> { 
            setUser(currentUser) // setting state to the currentUser signe in to db
        })
        return () => {
            unsubscribe();
        }
    })

    
    return (
        <AuthContext.Provider value={{ signUp, logIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext)
}