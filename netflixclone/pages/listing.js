import ListingHeader from '../components/ListingHeader'
import Row from '../components/Row'
import requests from '../apiRequest/requests'

//Prerenders data at build time
export async function getStaticProps() {
    const res1 = await fetch(requests.popular)
    const post1 = await res1.json()

    const res2 = await fetch(requests.upcoming)
    const post2 = await res2.json()

    const res3 = await fetch(requests.Drama)
    const post3 = await res3.json()

    const res4 = await fetch(requests.Horror)
    const post4 = await res4.json()

    const res5 = await fetch(requests.Comedy)
    const post5 = await res5.json()
    return {
        props: {
            post1,
            post2,
            post3,
            post4,
            post5,
        }
    }
}

// Movie listing
export default function listing(props) {
    return (
        <div className="pageContainer bg-zinc-900 ">
            <ListingHeader movie={props.post1.results} /> {/* Random Image Header for popular listing */}
            <Row rowID='1' title="Popular" movies={props.post1.results} /> 
            <Row rowID='2' title="Up Coming" movies={props.post2.results} />
            <Row rowID='3' title="Drama" movies={props.post3.results} />
            <Row rowID='4' title="Horror " movies={props.post4.results} />
            <Row rowID='5' title="Comedy" movies={props.post5.results} />
        </div>
    )
}