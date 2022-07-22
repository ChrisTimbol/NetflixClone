import Head from 'next/head'
import Image from 'next/image'

// Story cards for the landing page
export default function StoryCard(props) {
    return (
        <div className=" text-center  border-b-8 border-stone-600  bg-black ">
        <h1 className="our-story-card font-bold block mb-1.5 text-4xl text-white pt-5"> {props.title}</h1>
        <h2 className="our-story-card-subtitle text-white text-2xl"> {props.text} </h2>
        <Image alt="Image" className="" width={640} height={480} src={props.image} />
      </div>
    )
}