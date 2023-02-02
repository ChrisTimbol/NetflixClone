import Image from 'next/image'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

export default function Movie(props) {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()
    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShow = async () => {
        if (user?.email) {
          setLike(!like) // like icon
          setSaved(true) // Add to save state
          await updateDoc(movieID, { // Update doc
            savedShows: arrayUnion({
              id: props.e.id,
              title: props.e.title,
              img: props.e.backdrop_path,
            }),
          })
        } else {
          alert('Please log in to save a movie')
        }
      } 

    // if the photo url exist then display it
    if (props.e?.backdrop_path) { 
        return (
            <div key={props.i} className=" z-0 hover:z-10 hover:scale-105 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative px-1 ">
                <Image layout='responsive' width={240} height={160} quality={100} alt={props.e?.title} priority={true} src={`https://image.tmdb.org/t/p/w500/${props.e?.backdrop_path}`} />
                <div className='flex justify-center items-center absolute bottom-0  top-0 left-0 right-0 hover:bg-black/80 hover:opacity-80 opacity-0 text-white'>
                    <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center text-center  h-full w-full ">
                        {props.e?.title}
                    </p>
                    <p onClick={saveShow}>
                      {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> :<FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                    </p>
                </div>
            </div>
        )
    }
}