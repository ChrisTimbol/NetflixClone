import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

export default function Navbar() {
    const { user, logOut } = UserAuth()

    const handleLogout = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        } 
    }
    return (
        <>

            <div className="Navbar flex justify-between absolute left-0  z-10 ">
                <div className="navTitle " >
                    <Image src="/LandingPage/Netflix_Logo_PMS.png" width={200} height={90} />
                </div>
            </div>
            <div className="linkContainer flex list-none absolute right-0 z-10">
      
                {user?.email ? (
                    <>
                        <li >
                            <button className=" px-2 py-2 rounded text-white m-4"> Account </button>
                        </li>
                        <li>
                            <Link href="/"><button className="bg-red-600 px-6 py-2 rounded text-white m-4"> Logout</button></Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li >
                            <select className="bg-zinc-800/60 px-2 py-2 rounded text-white m-4" name="languageMenu">
                                <option value="English">English</option>
                                <option value="Espanol">Espanol</option>
                            </select>
                        </li>
                        <li>
                            <Link href="/login"><button className="bg-red-600 px-6 py-2 rounded text-white m-4"> Sign In</button></Link>
                        </li>
                    </>
                )
                }

            </div>

        </>
    )
}

