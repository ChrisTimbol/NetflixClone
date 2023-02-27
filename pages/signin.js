import Authenticate from '../components/Authenticate'

/* The Signin Page */
export default function Signin() {
    return <Authenticate 
            title="Sign In"
            text="New to Netflix?"
            linkText=" Sign Up now."
            href="/signup" 
            />
}