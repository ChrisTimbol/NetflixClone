import Image from 'next/image'
import Link from 'next/link'
export default function login() {

    return (
        <>
            <div className="relative flex items-center justify-center h-100vh  border-b-8 border-stone-600 bg-black bg-gradient-to-b ">
                <Image className="z-0 " layout='fill' objectFit="cover" src="/LandingPage/landingBackground.jpg" />

                <div className="login-container z-10 rounded flex flex-col bg-zinc-900/90 pt-16 px-16 pb-10 mb-24 "> 
                    <div className="login-form-container ">
                        <h1 className="text-2xl text-white font-bold mb-7">Sign In</h1>
                        <form method="post" className="rounded flex flex-col  login-form text-white ">
                            
                        <input className="mb-2 p-4 bg-zinc-700" type="email" id="email" placeholder="Email Address" name="email" />
                        <input className="p-4 bg-zinc-700" type="password" data-uia="password-field" placeholder="Password"  name="password" class="nfTextField" id="id_password" value="" tabindex="0" autocomplete="password" dir="" />
                        <input className="cursor-pointer p-4 my-5 font-bold bg-red-600 items-start align-middle text-center px-20 w-100" type="submit" value="Sign in" />
                        </form>
                     
                    </div>
                    <div className="text-gray-500 login-signup-now" data-uia="login-signup-now">New to Netflix? <Link href="/Login" ><a className="text-white">Sign up now</a></Link>.</div>
                    <div className="text-gray-500"> This page is protected by Google reCAPTCHA to <br></br>ensure you're not a bot.</div>
                </div>
            </div>
        </>
    )
}