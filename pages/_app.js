import '../styles/globals.css'
import { UserContext } from '../utils/context'
import { useUserData } from '../utils/hooks'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  const userData = useUserData();

  return (
    <>
    <UserContext.Provider value={userData}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserContext.Provider>
    </>
    
  )
  
}

export default MyApp
