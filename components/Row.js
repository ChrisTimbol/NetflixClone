import Movie from '../components/Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

/* Row of movies  */
function Row(props) {

    //Sliders
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
            <h2 className="text-white font-bold md:text-xl p-4">{props.title}</h2>
            <div className="relative flex items-center group">
                <MdChevronLeft
                    onClick={slideLeft}
                    className="z-50 bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 hidden cursor-pointer z-10 group-hover:block"
                    size={40}
                />

                <div
                    className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar relative "
                    id={'slider' + props.rowID}
                    
                >
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