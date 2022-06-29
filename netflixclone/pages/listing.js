export async function getStaticProps() {
    const apiKey = "41ea7284a9159436457db40fae4eadda"
    const res = await fetch('https://api.themoviedb.org/3/movie/550?api_key=41ea7284a9159436457db40fae4eadda')
    const posts = await res.json()


    return {
        props: {
            posts
        }
    }
}


function listing(props) {
    return (
        <>
        {console.logposts}
        </>
    )
}

export default MovieListings