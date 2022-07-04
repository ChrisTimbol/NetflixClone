import Image from 'next/image'
import Link from 'next/link'
import { UserAuth } from '../context/AuthContext'
export default function Navbar() {
    const {user, logOut } = UserAuth
    console.log(user)
    return (
        <>

            <div className="Navbar flex justify-between absolute left-0  z-10 ">
                <div className="navTitle " >
                    <Image src="/LandingPage/Netflix_Logo_PMS.png" width={200} height={90} />
                </div>
            </div>
            <div className="linkContainer flex list-none absolute right-0 z-10">
                <li >
                    <select className="bg-zinc-800/60 px-2 py-2 rounded text-white m-4" name="languageMenu">
                        <option value="English">English</option>
                        <option value="Espanol">Espanol</option>
                    </select>
                </li>
                <li>
                    <Link href="/login"><button className="bg-red-600 px-6 py-2 rounded text-white m-4"> Sign In</button></Link>
                </li>
            </div>
     {/*        {user?.email} */}

        </>
    )
}
