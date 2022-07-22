import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


// User Signup/Signin
export default function Authenticate(props) {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { user, logIn, signUp } = UserAuth()

    // When Sign button is clicked login/signup to firebase 
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (user) {
            try {
                await logIn(email, password)
                router.push({ pathname: '/listing' })
            } catch (error) {
                setError(error.message)
            }
        } else {
            try {
                await signUp(email, password)

            } catch (error) {
                setError(error.message)
            }
        }
    }

    return (
        <>
            <div className="PageContainer relative flex items-center justify-center h-100vh  border-b-8 border-stone-600  bg-gradient-to-b ">
                <Image className="z-0 " alt="Image" quality={100} priority layout='fill' objectFit="cover" src="/LandingPage/landingBackground.jpg" />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"> </div>
                <div className="fixed w-full px-4 py-20">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/75">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-3xl font-bold text-white" >{props.title}</h1>
                            {error ? <p className='text-red-600 font-bold p-2'>{error}</p> : null} {/* displays error message in red */}
                            <form className="rounded w-full flex flex-col  login-form text-white py-4 " onSubmit={handleSubmit}>
                                <input className="mb-2 p-3 bg-zinc-700"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email Address"
                                    autoComplete="email"
                                    name="email"
                                    text={email}
                                />
                                <input
                                    className="p-3 bg-zinc-700"
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                />
                                <button className=" hover:bg-red-900 cursor-pointer py-3 my-6 text-center rounded font-bold bg-red-600 group" type="submit" value="Submit">
                                    Sign Up
                                </button>
                            </form>

                            <div className="text-zinc-500 login-signup-now">{props.text}
                                <Link href={props.href} >
                                    <a className="text-white">{props.linkText}</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}