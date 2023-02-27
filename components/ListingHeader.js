import { useState, useEffect } from 'react'
import Image from 'next/image'

// Displays a random movie from the movie api as the 'HeroSection'
export default function ListingHeader(props) {

    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)] // Random movie generator
    let image 

    useEffect(() => {
        setMovies(props.movie) // set movies to the movie array passed in since data fetching can only be on page and not in a component
    }, [])

    // trim movie description just in case its to long
    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + "..."
        } else {
            return str
        }
    }

    // Some api images are null , so this declares an image only if it exist, to prevent blanks
    if (movie?.backdrop_path) {
        image = <Image layout='fill' objectFit="cover" alt="Image" quality={100} priority={true} src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`} />
    }

    return (
        <div className="w-full h-[550px] text-white relative">
            <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
            {image}
            <div className="absolute w-full top-[20%] p-4 md:p-8">
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className="my-4">
                    <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">Play</button>
                    <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 ml-4">Watch Later</button>
                </div>
                <p className='text-gray-400 text-sm'> Released: {movie?.release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                    {truncateString(movie?.overview, 150)} {/* Cut movie string if to long */}
                </p>
            </div>
        </div>
    )
}