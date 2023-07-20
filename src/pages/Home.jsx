import { Link } from 'react-router-dom';
import About from './About';

function Home(){
    return(
    <div>
            {/* Hero Section */}
      <div className="home-content">      
            <section className="container">
                <div className="row">
                  <div className="row1 text-banner col-md-7 my-auto" data-aos="fade-right" >
                      <h1 className="fw-bold">Life is not better without Coffee</h1>
                      <h4>Put some Coffee in your day.</h4>
                      <h5>Eat. Drink. Enjoy.</h5>
                      
                  </div>
                  <div className="row2 col-md-5 " data-aos="fade-left">
                      <img src="./images/coffee.png" className="img-fluid" />
                  </div>
                </div>
            </section>
            <div className="order-btn d-flex justify-content-center">
              <Link to="/products" className="btn-link border p-3 rounded bg-light shadow"><strong>Order Online</strong></Link>
            </div>
            <div className="md-12 text-center m-5 p-5"  
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">
                <p><b>Coffee <span>|</span> Break Fast <span>|</span> Lunch <span>|</span> Dinner <span>|</span> Sandwiches <span>|</span> Espresso <span>|</span> Tea</b></p>
            </div>
            
        < About/>
        
      </div>
    </div>
    )
}

export default Home;