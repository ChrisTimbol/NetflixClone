import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'


// Push to sign in page if user is not signed in 
export default function AuthRoute({ children }) {
    const { user } = UserAuth() // user connected
    const router = useRouter() // used to route 
    if (!user) { // if user isn't signed in then make them go to sign in page
        router.push({ pathname: '/signin'}) // push user to sign in
    }
    else {
        return children // returns page
    }
}