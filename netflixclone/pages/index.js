import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function Home(props) {

  const router = useRouter()
  const [email, setEmail] = useState(

  )
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push({ pathname: '/signup' })

  }
/*     useEffect(() => {
      localStorage.setItem("email", JSON.stringify(email))
    }, [email]) */

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone Project" />
      </Head>
      <div className="relative flex items-center justify-center h-82vh  border-b-8 border-stone-600 bg-black bg-gradient-to-b">

        <Image className="z-0 " alt="Image" layout='fill' quality={100} objectFit="cover" priority={true} src="/LandingPage/landingBackground.jpg" />

        <div className="story-card-text  relative text-white text-center  " >
          <h1 className="story-card-title text-5xl font-bold">Unlimited movies, TV shows, and more.</h1>
          <h2 className="our-story-card-subtitle text-xl">Watch anywhere. Cancel anytime. </h2>
          <h3 className="email-form-title block m-1 font-semibold">Ready to watch? Enter your email to create or restart your membership.</h3>
          <form 
            onSubmit={handleSubmit}
            className="form-email flex justify-center md:flex-wrap sm:flex-wrap" 
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-2 w-8/12 h-12 px-10 border-2 text-left text-black border-gray-400 outline-zinc-600 rounded-sm text-base"
              type="email"
              placeholder="Email Address"
              name="email"
            />
          <button
            className="bg-red-600 px-7 py-4 rounded text-white select-none  cursor-pointer"
            type="submit"
            value="Submit"
          >
            Get Started
          </button>
          </form>

        </div>
      </div>

      <div className=" text-center  border-b-8 border-stone-600  bg-black ">

        <h1 className="our-story-card font-bold block mb-1.5 text-4xl text-white pt-5"> Enjoy on your TV.</h1>
        <h2 className="our-story-card-subtitle text-white text-2xl"> Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        <Image className="" width={640} height={480} src="/LandingPage/tv.png" />
      </div>

      <div className=" text-center border-b-8 border-stone-600 bg-black pt-5">
        <h1 className="our-story-card font-bold block mb-1.5 text-4xl text-white">Download your shows to watch offline. </h1>
        <h2 className="our-story-card-subtitle text-white text-2xl">Save your favorites easily and always have something to watch.</h2>
        <Image className="" width={640} height={480} src="/LandingPage/mobile-0819.jpg" />
      </div>

      <div className="  text-center border-b-8 border-stone-600 bg-black">

        <h1 className="our-story-card font-bold block mb-1.5 text-4xl text-white pt-5"> Watch everywhere. </h1>
        <h2 className="our-story-card-subtitle text-white text-2xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
        <Image className="" width={640} height={480} src="/LandingPage/device-pile.png" />
      </div>

      <div className="  text-center border-b-8 border-stone-600 bg-black">
        <h1 className="our-story-card font-bold block mb-1.5 text-4xl text-white pt-5"> Create profiles for kids.</h1>
        <h2 className="our-story-card-subtitle text-white text-2xl"> Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
        <Image className="" width={640} height={480} src="/LandingPage/kids.png" />
      </div>

      <div className=" text-center bg-black text-white">
        <h1 className="our-story-card text-4xl pt-5"> Frequently Asked Questions</h1>
        <ul>
          <li className="faq-list-item">
            <button className="faq-question">What is Netflix?</button>
          </li>
          <li className="faq-list-item">
            <button className="faq-question">How much does Netflix cost?</button>
          </li>
          <li className="faq-list-item">
            <button className="faq-question">Where can I watch?</button>
          </li>
          <li className="faq-list-item">
            <button className="faq-question">What can I watch on Netflix?</button>
          </li>
          <li className="faq-list-item">
            <button className="faq-question">Is Netflix good for kids?</button>
          </li>
        </ul>

        <h3
          className="email-form-title">Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <form
          onSubmit={handleSubmit}
          className="border-b-8 border-stone-600">

          <input
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-2 w-8/12 h-12 px-10 border-2 text-left text-black border-gray-400 outline-indigo-600 rounded-sm text-base"
            type="email"
            placeholder="Email Address"
            autoComplete="email"
            name="email"
          />

          <button
            className="bg-red-600 px-6 py-2 m-2 rounded text-white select-none  cursor-pointer"
            type="submit"
            value="Submit"
          >
            Get Started
          </button>
        </form>

      </div>

      <footer className="footer bg-black text-white">
        <h3>Questions? Call 1-844-505-2993</h3>
      </footer>
    </div>
  )
}
