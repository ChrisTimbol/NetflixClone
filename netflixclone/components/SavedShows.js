import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
const SavedShows = (props) => {
    const [movies, setMovies] = useState([])
    const { user } = UserAuth()

    const slideLeft = () => {
        var slider = document.getElementById('slider' + props.rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + props.rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows)
        })
    }, [user?.email])

    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((e) => e.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result,
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
            <h2 className="text-white font-bold md:text-xl p-4"> My Saved Shows</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft
                    onClick={slideLeft}
                    className="z-50 bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block"
                    size={40}
                />

                <div
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar scrollbar-hide relative "
                    id={'slider' + props.rowID}
                >
                    {movies.map((e, i) => (
                        <div key={i} className="z-0 hover:z-10 hover:scale-125 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative px-1 ">
                            <Image 
                                layout='responsive' 
                                width={240} height={160} 
                                quality={100} 
                                alt={e?.title} 
                                priority={true} 
                                src={`https://image.tmdb.org/t/p/w500/${e?.img}`} />

                            <div className='flex justify-center items-center absolute bottom-0  top-0 left-0 right-0 hover:bg-black/80 hover:opacity-80 opacity-0 text-white'>

                                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center text-center  h-full w-full ">
                                    {e?.title}
                                </p>
                                <p 
                                onClick={() => { deleteShow(e?.id) }} 
                                    className="absolute text-gray-300 top-4 right-4">
                                    <AiOutlineClose />
                                </p>

                            </div>
                        </div>
                    ))}
                </div>

                <MdChevronRight 
                    onClick={slideRight} 
                    className="z-50 bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100  hidden cursor-pointer z-10 group-hover:block" 
                    size={40} 
                />

            </div>
        </>
    )
}

export default SavedShows