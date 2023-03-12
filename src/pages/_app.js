import '@/styles/globals.css'
import 'bootswatch/dist/lux/bootstrap.min.css'; // Added this :boom:
import Footer from './components/Footer';
import Header from './components/Header';
import {useEffect} from 'react';
export default function App({ Component, pageProps }) {
   useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return(
    <>
    <div>
      <Header/> 
    </div>
    <Component {...pageProps} />
    <div className='bg-secondary'>
      <Footer/>
    </div>
    </>
    )

}
