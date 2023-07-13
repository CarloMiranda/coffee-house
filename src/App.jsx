import React, { useEffect} from "react"
import Aos from 'aos';
import Index from './pages/Index';
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    < Index />
  )
}

export default App
