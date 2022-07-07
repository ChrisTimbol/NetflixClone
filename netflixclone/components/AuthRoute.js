import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

// Push to sign in page if user is not signed in 
export default function AuthRoute({ children }) {
    const { user } = UserAuth()
    const router = useRouter()
    if (!user) {
        router.push({ pathname: '/signin'})
    }
    else {
        return children
    }
}