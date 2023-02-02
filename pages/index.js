import Head from 'next/head'
import Image from 'next/image'
import StoryCard from '../components/StoryCard'
import { useRouter } from 'next/router'
import { UserAuth } from '../context/AuthContext'
export default function Home(props) {

  const router = useRouter() 
  const { setEmail } = UserAuth()
  const handleSubmit = (e) => {
    e.preventDefault()
    router.push({ pathname: '/signup' })

  }


  return (
    <div> {/* landing page */}
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone Project" />
      </Head>
      <div className="pageContainer relative flex items-center justify-center h-82vh  border-b-8 border-stone-600 bg-black bg-gradient-to-b">
        {/*Background image */}
        <Image className="z-0 " alt="Image" layout='fill' quality={100} objectFit="cover" priority={true} src="/LandingPage/landingBackground.jpg" />
        <div className="story-card-text  relative text-white text-center" >
          <h1 className="story-card-title text-5xl font-bold">Unlimited movies, TV shows, and more.</h1>
          <h2 className="our-story-card-subtitle text-xl">Watch anywhere. Cancel anytime. </h2>
          <h3 className="email-form-title block m-1 font-semibold">Ready to watch? Enter your email to create or restart your membership.</h3>
          <form className="form-email flex justify-center md:flex-wrap sm:flex-wrap" onSubmit={handleSubmit}>
            <input
              className="px-6 py-2 w-8/12 h-12 px-10 border-2 text-left text-black border-gray-400 outline-zinc-600 rounded-sm text-base"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email Address"
              name="email"
            />
            <button className="bg-red-600 px-7 py-4 rounded text-white select-none  cursor-pointer" type="submit" value="Submit">Get Started</button>
          </form>
        </div>
      </div>
      <StoryCard
        title="Enjoy on your TV."
        text="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        image="/LandingPage/tv.png"
      />
      <StoryCard
        title="Download your shows to watch offline."
        text="Save your favorites easily and always have something to watch."
        image="/LandingPage/mobile-0819.jpg"
      />
      <StoryCard
        title="Watch everywhere."
        text="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
        image="/LandingPage/device-pile.png"
      />
      <StoryCard
        title="Create profiles for kids."
        text=" Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        image="/LandingPage/kids.png"
      />

      <div className="text-center bg-black text-white">
        <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
        <form className="form-email flex justify-center md:flex-wrap sm:flex-wrap" onSubmit={handleSubmit}>
          <input
            className="px-6 py-2 w-8/12 h-12 px-10 border-2 text-left text-black border-gray-400 outline-zinc-600 rounded-sm text-base"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            name="email"
          />
          <button className="bg-red-600 px-7 py-4 rounded text-white select-none  cursor-pointer" type="submit" value="Submit">Get Started</button>
        </form>
      </div>
      <footer className="footer bg-black text-center text-white">
        <h3>Questions? Call 1-844-505-2993</h3>
      </footer>
    </div>
  )
}
