import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

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
            {/* NavBrand Image */}
            <div className="Navbar flex justify-between absolute left-0  cursor-pointer z-10 ">
                <div className="navTitle" onClick={handleNetflixClick}>
                    <Image alt="Image" src="/LandingPage/Netflix_Logo_PMS.png" width={200} height={90}/>
                </div>
            </div>

            <div className="linkContainer flex list-none absolute right-0 z-10">
                {/* Renders different navbar buttons based on user sign in */}
                {user?.email ? (
                    <>
                        <li className='z-20' >
                            <button className=" px-2 py-2 rounded text-white m-4 font-bold hover:text-red-600" onClick={handleAccount} > My Fav Shows </button>
                        </li>
                        <li>
                           <button className="bg-red-600 px-6 py-2 rounded text-white m-4 hover:bg-red-900" onClick={handleLogout}> Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li  className="z-20">
                        <Link href="/listing"><button className=" px-6 py-2 rounded text-white m-4"> Listings </button></Link>

                        </li>
                        <li>

                            <Link href="/signin"><button className="hover:bg-red-900 bg-red-600 px-6 py-2 rounded text-white m-4"> Sign In </button></Link>
                        </li>
                    </>
                )
                }

            </div>

        </>
    )
}

