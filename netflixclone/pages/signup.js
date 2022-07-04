import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'
export default function signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="relative flex items-center justify-center h-100vh  border-b-8 border-stone-600  bg-gradient-to-b ">
                <Image className="z-0 " quality={100} priority layout='fill' objectFit="cover" src="/LandingPage/landingBackground.jpg" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"> </div>
                <div className="z-10 fixed w-full px-4 py-20">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold text-white" >Sign Up</h1>

                            <form onSubmit={handleSubmit}
                                className="rounded w-full flex flex-col  login-form text-white py-4 ">

                                <input className="mb-2 p-4 bg-zinc-700"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email Address"
                                    autoComplete="email"
                                    name="email" />
                                <input
                                    className="p-4 bg-zinc-700"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password" />

                                <Link href="/listing">
                                    <button className="cursor-pointer py-3 my-6 text-center rounded font-bold bg-red-600 group">
                                        <a>
                                            Sign Up
                                        </a>
                                    </button>
                                </Link>
                            </form>

                            <div
                                className="text-zinc-500 login-signup-now"
                                data-uia="login-signup-now">Already a member?
                                <Link href="/login" >
                                    <a className="text-white">Sign in now</a>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}