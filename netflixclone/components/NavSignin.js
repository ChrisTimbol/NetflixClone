import Link from 'next/link'
export default function NavSignin() {
    return (
        <div className="linkContainer flex list-none absolute right-0 z-10">
            <li >
                <select className="bg-zinc-800/60 px-2 py-2 rounded text-white m-4" name="languageMenu">
                    <option value="English">English</option>
                    <option value="Espanol">Espanol</option>
                </select>
            </li>
            <li>
                <Link href="/Login"><button className="bg-red-600 px-6 py-2 rounded text-white m-4"> Sign In</button></Link>
            </li>
        </div>
    )
}