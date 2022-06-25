import Image from 'next/image'

export default function Navbar() {

    return (
        <>

            <div className="Navbar flex justify-between">


                <div className="navTitle " >
                    <Image src="/LandingPage/Netflix_Logo_PMS.png" width={200} height={90} />
                </div>

                <div className="linkContainer flex list-none ">
                    <li>
                        <select className="bg-zinc-800/60 px-2 py-2 rounded-md text-white m-4" name="languageMenu">
                            <option value="English">English</option>
                            <option  value="Spanish">Spanish</option>

                        </select>
                    </li>
                    <li>
                      <button  className="bg-red-500 px-5 py-2 rounded-md text-white m-4"> Sign In</button> 
                    </li>
                </div>

            </div>


        </>
    )
}
