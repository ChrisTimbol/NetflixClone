import Movie from '../components/Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

/* Row format for movie spacing w/ titles etc */
function Row(props) {

    // Allows uer to iterate through movies
    const slideLeft = () => {
        var slider = document.getElementById('slider' + props.rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () => {
        var slider = document.getElementById('slider' + props.rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            {/* Title of Type */}
            <h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>


            <div className="relative flex items-center group">
                {/* Arrows for iterating through movie selection */}
                <MdChevronLeft
                    onClick={slideLeft}
                    className="z-50 bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block"
                    size={40}
                />

                <div
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative "
                    id={'slider' + props.rowID}
                    
                >
                    {/* Map movies into the row */}
                    {props.movies.map((e, i) => (
                   
                        <Movie className="z-20" key={i} e={e} i={i} />
                    ))}
                </div>

                <MdChevronRight onClick={slideRight} className="z-50 bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100  hidden cursor-pointer z-10 group-hover:block" size={40} />
            </div>

        </>
    )
}

export default Row