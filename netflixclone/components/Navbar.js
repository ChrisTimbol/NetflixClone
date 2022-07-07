import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { Router, useRouter } from 'next/router'

export default function Navbar() {
    const { user, logOut } = UserAuth()
    const router = useRouter()
    const handleLogout = async () => {
        try {
            await logOut()
            router.push({pathname: '/signin'})
        } catch (error) {
            console.log(error)
        } 
    }
    const handleAccount = () => {
        router.push({ pathname: '/account'})
    }
    const handleNetflixClick = () => {
        router.push({ pathname: '/listing'})
    }
    return (
        <>

            <div className="Navbar flex justify-between absolute left-0  cursor-pointer z-10 ">
                <div 
                    onClick={handleNetflixClick}
                    className="navTitle " >
                    <Image alt="Image" src="/LandingPage/Netflix_Logo_PMS.png" width={200} height={90} />
                </div>
            </div>
            <div className="linkContainer flex list-none absolute right-0 z-10">
      
                {user?.email ? (
                    <>
                        <li >
                            
                            <button 
                                   onClick={handleAccount}
                                    className=" px-2 py-2 rounded text-white m-4 font-bold"> My Fav Shows </button>
                        </li>
                        <li>
                           <button onClick={handleLogout} className="bg-red-600 px-6 py-2 rounded text-white m-4"> Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li >
                            <select className="z-20 bg-zinc-800/60 px-2 py-2 rounded text-white m-4" name="languageMenu">
                                <option value="English">English</option>
                                <option value="Espanol">Espanol</option>
                            </select>
                        </li>
                        <li>
                            <Link href="/signin"><button className="bg-red-600 px-6 py-2 rounded text-white m-4"> Sign In</button></Link>
                        </li>
                    </>
                )
                }

            </div>

        </>
    )
}

