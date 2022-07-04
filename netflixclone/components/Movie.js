import Image from 'next/image'
import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
function Movie(props) {
    const [like, setLike] = useState(false)
    let image;
    if(props.e?.backdrop_path)  {
        image =<Image layout='responsive' width={240} height={160} quality={100} alt={props.e.title} priority={true} src={`https://image.tmdb.org/t/p/w500/${props.e?.backdrop_path}`} />
    }


    return (
        <div key={props.i} className=" z-0 hover:z-10 hover:scale-125 w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative px-1 ">
            {/*       {console.log(props.e?.backdrop_path)} */}

            {image}
            <div className='flex justify-center items-center absolute bottom-0  top-0 left-0 right-0 hover:bg-black/80 hover:opacity-80 opacity-0 text-white'>
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center text-center  h-full w-full ">
                    {props.e?.title}

                </p>
            </div>
            <p>
                {like ? <FaRegHeart className="absolute top-4 left-4 text-gray-300" /> : <FaRegHeart className="absolute top-4 left-4 text-gray-300" />}
            </p>



        </div>

    )
}

export default Movie