import '../styles/globals.css'
import NavBrand from '../components/NavBrand'

function MyApp({ Component, pageProps }) {
  return (
    <>
       <NavBrand /> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
