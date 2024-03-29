import Image from 'next/image'
import AuthRoute from '../components/AuthRoute'
import SavedShows from '../components/SavedShows'

/* Account page where 'liked' movies are displayed */
// Wrapped in AuthRoute 
export default function Account() {
    return (
        <AuthRoute>
            <div className="bg-black min-h-screen w-full">
                <div className="text-white relative flex items-center justify-center w-full  h-[400px] border-b-8 border-stone-600" >
                    <Image className="z-0 " layout='fill' alt="Image" quality={100} objectFit="cover" priority={true} src="/LandingPage/landingBackground.jpg" />
                    <div className="absolute top-[40%] left-[10%]  p-4 md:p-8">
                        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
                    </div>
                </div>
                <SavedShows /> {/* Saved shows that was liked */}
            </div>
        </AuthRoute>
    )
}