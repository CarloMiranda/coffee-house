import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import NoFound from './NoFound';
import Layout from './Layout';
import Blogs from './Blogs';

function Index(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/about" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NoFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;