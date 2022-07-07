import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function signin() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, logIn } = UserAuth()
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await logIn(email, password)
            router.push({ pathname: '/listing' })
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <div className="relative flex items-center justify-center h-100vh bg-gradient-to-b ">
                <Image className="z-0 " layout='fill' priority objectFit="cover" quality={100} src="/LandingPage/landingBackground.jpg" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"> </div>
                <div className="fixed w-full px-4 py-20 ">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold text-white" >Sign In</h1>
                            {error ? <p className='text-red-600 font-bold p-2'>{error}</p> : null}
                            <form
                                onSubmit={handleSubmit}
                                method="post"
                                className="rounded w-full flex flex-col  login-form text-white py-4 "
                            >

                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mb-2 p-4 bg-zinc-700"
                                    type="email" id="email"
                                    placeholder="Email Address"
                                    name="email" />
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="p-4 bg-zinc-700"
                                    type="password"
                                    placeholder="Password" 
                                    name="password"
                                    autoComplete="password" />
                                <button
                                    type="submit"
                                    value="Submit"
                                    className="cursor-pointer py-3 my-6 text-center rounded font-bold bg-red-600 group"
                                >Sign In</button>


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