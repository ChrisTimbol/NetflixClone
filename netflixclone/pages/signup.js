import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, db } from '../firebase'
export default function Signup() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user, signUp } = UserAuth()
    const [error, setError] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            onAuthStateChanged(auth, (currentUser) => {
                if(currentUser) {
                    router.push({ pathname: '/listing' }) 
                }
            })
        } catch (error) {
            setError(error.message)
        }

    }
    


    return (
        <>
            <div className="relative flex items-center justify-center h-100vh  border-b-8 border-stone-600  bg-gradient-to-b ">
                <Image className="z-0 " alt="Image" quality={100} priority layout='fill' objectFit="cover" src="/LandingPage/landingBackground.jpg" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"> </div>
                <div className="fixed w-full px-4 py-20">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold text-white" >Sign Up</h1>
                            {error ? <p className='text-red-600 font-bold p-2'>{error}</p> : null}


                            <form
                                onSubmit={handleSubmit}
                                className="rounded w-full flex flex-col  login-form text-white py-4 "
                            >

                                <input className="mb-2 p-3 bg-zinc-700"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email Address"
                                    name="email" 
                                    text={email}
                                />

                                <input
                                    className="p-3 bg-zinc-700"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"    
                                />

                                <button
                                    type="submit"
                                    value="Submit"
                                    className=" hover:bg-red-900 cursor-pointer py-3 my-6 text-center rounded font-bold bg-red-600 group"
                                >
                                    Sign Up
                                </button>

                            </form>

                            <div
                                className="text-zinc-500 login-signup-now"
                                data-uia="login-signup-now">Already a member?
                                <Link href="/signin" >
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