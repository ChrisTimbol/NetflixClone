import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'

export default function login() {


    const { user } = UserAuth()

    return (
        <>
            <div className="relative flex items-center justify-center h-100vh  border-b-8 border-stone-600  bg-gradient-to-b ">
                <Image className="z-0 " layout='fill' priority objectFit="cover" quality={100} src="/LandingPage/landingBackground.jpg" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"> </div>
                <div className="z-10 fixed w-full px-4 py-20">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold text-white" >Sign In</h1>
                            <form method="post" className="rounded w-full flex flex-col  login-form text-white py-4 ">

                                <input className="mb-2 p-4 bg-zinc-700" type="email" id="email" placeholder="Email Address" name="email" />
                                <input className="p-4 bg-zinc-700" type="password" placeholder="Password" name="password"  autoComplete="password" />
                                <button
                                    className="cursor-pointer py-3 my-6 font-bold bg-red-600"
                                    type="submit">Sign In</button>
                                <div className="flex justify-between text-small text-zinc-600">
                                    <label className=""><input type="checkbox" /> Remember me</label>
                                    <p>Need Help?</p>
                                </div>
                            </form>
                            <div className="text-gray-500 login-signup-now" data-uia="login-signup-now">New to Netflix? <Link href="/signup" ><a className="text-white">Sign up now</a></Link>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}