import Authenticate from '../components/Authenticate'

/* The Signup Page */
export default function Signup() {
    return <Authenticate 
                title="Sign Up" 
                text="Already a member?"
                linkText="Sign in Now"
                href="/signin" 
            />
}