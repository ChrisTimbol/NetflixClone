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


    </div>
  )
}
