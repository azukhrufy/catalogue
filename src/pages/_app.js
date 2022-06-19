import '../styles/globals.css'
import Navbar from '../common/elements/components/navbar/Navbar'
import Footer from '../common/elements/components/footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
