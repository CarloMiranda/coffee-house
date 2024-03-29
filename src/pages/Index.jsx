import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';
import NoFound from './NoFound';
import Layout from './Layout';
import Blogs from './Blogs';
import Career from './Career';
import Login from './Login';
import { ShopContextProvider } from '../context/ShopContext';

function Index(){
    return(
        <BrowserRouter>
            <ShopContextProvider>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}/>
                        <Route path="/products" element={<Products />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="*" element={<NoFound />} />
                        
                    </Route>
                </Routes>
            </ShopContextProvider>
        </BrowserRouter>
    )
}

export default Index;