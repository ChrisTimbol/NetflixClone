import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect } from 'react';

export async function getStaticProps() {

  const res = await fetch('https://api.themoviedb.org/3/movie/550?api_key=41ea7284a9159436457db40fae4eadda')
  const posts = await res.json()


  return {
    props: {
      posts
    }
  }
}


export default function Home(props) {

  useEffect(() => {
    console.log(props)
  })
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone Project" />
      </Head>

      <div className="relative flex items-center justify-center h-82vh border-4 border-red-500 mb-2 ">

        <Image className="z-1" layout='fill' objectFit="cover" src="/LandingPage/landingBackground.jpg" />

        <div className="story-card-text border-4 border-pink-500 relative text-white text-center " >
          <h1 className="story-card-title text-5xl font-bold">Unlimited movies, TV shows, and more.</h1>
          <h2 className="our-story-card-subtitle text-xl">Watch anywhere. Cancel anytime. </h2>
          <h3 className="email-form-title block m-1 font-semibold">Ready to watch? Enter your email to create or restart your membership.</h3>
          <form className="form-email flex justify-center md:flex-wrap sm:flex-wrap" /* method get */ >
            <input className="px-6 py-2 w-8/12 h-12 px-10 border-2 text-left text-black border-gray-400 outline-indigo-600 rounded-sm text-base" type="email" id="email" placeholder="Email Address" name="email" />
            <input className="bg-red-600 px-6 py-2 m-2 rounded text-white select-none  cursor-pointer  " type="submit" value="Get Started >" />
          </form>

        </div>
      </div>

      <div className=" mb-2">
        <h1 className="our-story-card font-bold block mb-1.5 text-4xl"> Enjoy on your TV.</h1>
        <h2 className="our-story-card-subtitle "> Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        <Image className="" width={640} height={480} src="/LandingPage/tv.png" />
      </div>

      <div className=" mb-2">
        <h1 className="our-story-card font-bold block mb-1.5 text-4xl"> Watch everywhere. </h1>
        <h2 className="our-story-card-subtitle ">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
        <Image className="" width={640} height={480} src="/LandingPage/device-pile.png" />
      </div>

      <div className=" mb-2">
        <h1 className="our-story-card font-bold block mb-1.5 text-4xl"> Create profiles for kids.</h1>
        <h2 className="our-story-card-subtitle "> Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
        <Image className="" width={640} height={480} src="/LandingPage/kids.png" />
      </div>

      <div className="mb-2">
        <h1 className="our-story-card"> Frequently Asked Questions</h1>
        <ul>
          <li className="faq-list-item">
            <button class="faq-question">What is Netflix?</button>
          </li>
          <li className="faq-list-item">
            <button class="faq-question">How much does Netflix cost?</button>
          </li>
          <li className="faq-list-item">
            <button class="faq-question">Where can I watch?</button>
          </li>
          <li className="faq-list-item">
            <button class="faq-question">What can I watch on Netflix?</button>
          </li>
          <li className="faq-list-item">
            <button class="faq-question">Is Netflix good for kids?</button>
          </li>
        </ul>
      <form>
        <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
        <input className="px-6 py-2 w-8/12 h-12 px-10 border-2 text-left text-black border-gray-400 outline-indigo-600 rounded-sm text-base" type="email" id="email" placeholder="Email Address" name="email" />
            <input className="bg-red-600 px-6 py-2 m-2 rounded text-white select-none  cursor-pointer  " type="submit" value="Get Started >" />
      </form>
      </div>

      <footer className="footer">
        <h3>Questions? Call 1-844-505-2993</h3>
      </footer>
    </div>
  )
}
