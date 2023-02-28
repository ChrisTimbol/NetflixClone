import Image from 'next/image'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

/* Movie Layout */
export default function Movie(props) {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()
    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) { // if user is signed in 
          setLike(!like) // like icon
          setSaved(true) // Add to save state
          await updateDoc(movieID, { // Update doc
            savedShows: arrayUnion({
              id: props.e.id,
              title: props.e.title,
              img: props.e.backdrop_path,
            }),
          })
        } else { // else tell user to sign in
          alert('Please log in to save a movie')
        }
      } 

    // if the photo url exist then display it
    if (props.e?.backdrop_path) { 
        return (
            <div key={props.i} className=" z-0 hover:z-10 hover:scale-105 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative px-1 ">

                {/* Movie Image */}
                <Image layout='responsive' width={240} height={160} quality={100} alt={props.e?.title} priority={true} src={`https://image.tmdb.org/t/p/w500/${props.e?.backdrop_path}`} />
               
               {/*hover background */}
                <div className='flex justify-center items-center absolute bottom-0 mx-1  top-0 left-0 right-0 hover:bg-black/80 hover:opacity-80 opacity-0 text-white'>
                    
                    {/* Displays title in center of movie */}
                    <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center text-center  h-full w-full ">
                        {props.e?.title}
                    </p>

                    <p onClick={saveShow}> {/* If user clicks heart save to DB*/}
                      {like ? <FaHeart  className='absolute top-2 left-5 text-red-500 text-5xl'/> :<FaRegHeart  className='absolute top-2 left-5 text-gray-300 text-5xl' />}
                    </p>
                </div>
            </div>
        )
    }
}