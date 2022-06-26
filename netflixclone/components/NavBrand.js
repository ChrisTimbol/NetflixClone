import Image from 'next/image'

export default function Navbar() {

    return (
        <>

            <div className="Navbar flex justify-between absolute left-0  z-10 ">


                <div className="navTitle " >
                    <Image src="/LandingPage/Netflix_Logo_PMS.png" width={200} height={90} />
                </div>

            </div>


        </>
    )
}
