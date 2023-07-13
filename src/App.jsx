import React, { useEffect} from "react"
import Aos from 'aos';
import Index from './pages/Index';

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    < Index />
  )
}

export default App
