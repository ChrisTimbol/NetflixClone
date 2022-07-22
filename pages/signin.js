import Authenticate from '../components/Authenticate'

export default function Signin() {


    return <Authenticate 
            title="Sign In"
            text="New to Netflix?"
            linkText=" Sign Up now."
            href="/signup" 
            />
}