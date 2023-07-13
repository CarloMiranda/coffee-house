import { Link } from 'react-router-dom';

function Home(){
    return(
    <div className="container">
            {/* Hero Section */}
      <div className="home-content">      
            <section className="row">
                <div className="text-banner col-md-7 my-auto" data-aos="fade-right" >
                    <h1 className="fw-bold">Life is not better without Coffee</h1>
                    <h4>Put some Coffee in your day.</h4>
                    <h5>Eat. Drink. Enjoy.</h5>
                    
                </div>
                <div className="col-md-5 " data-aos="fade-left">
                    <img src="./images/coffee.png" className="img-fluid" />
                </div>
            </section>
            <div className="order-btn d-flex justify-content-center">
              <Link to="/products" className="btn-link border p-3 rounded bg-light"><strong>Order Online</strong></Link>
            </div>
            <div className="md-12 text-center m-5 p-5"  
                        data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0">
                <p><b>Coffee <span>|</span> Break Fast <span>|</span> Lunch <span>|</span> Dinner <span>|</span> Sandwiches <span>|</span> Espresso <span>|</span> Tea</b></p>
            </div>

        <section className="container-fluid">
            <div className="heading text-center m-4 p-4">
                <h1>About Us</h1>
            </div>
              <div className="row justify-content-center">
                <div className="col-md-5">
                    <h3>What Makes Our Coffee Special?</h3>
                    <p>
                      I wanted to take this time to let you know how grateful we are to 
                      have you choosing us for your coffee needs. Quality coffee is a passion 
                      for me and I am so thankful for your patronage which allows me to do this. 
                      I wanted to share a little about our coffees, and why I think they are so 
                      special. First of all, we buy our coffee from only the most reputable farms 
                      and mills in Kona. Being a teacher in Kona for three decades, I taught some 
                      of the farmers and some of their parents too - which goes a long way.
                      Most boutique coffee companies sell an estate coffee, called this because 
                      every bean comes from their estate which may be an acre or two of planted 
                      coffee – exactly how we started out. When the beans are picked and dried, 
                      they end up in a variety of sizes or grades. These boutique companies roast 
                      all beans of varying size together because they cannot afford to waste any 
                      beans regardless of quality and they don’t have enough beans for it to make 
                      sense to separate them into different grades. What you end up with is an 
                      inconsistent roast – the larger beans might not be roasted enough, while 
                      the smaller beans are roasted too much and taste burnt. Our “Estate” coffee 
                      is from a single grade so you get a much more uniform roast at the perfect 
                      temperature for that size. 
                    </p>
                
                    <div className="buttons p-2">
                        <button data-id="about-btn" className="about-btn p-1 rounded">Learn More.</button>
                    </div>
                </div>
                <div className=" col-md-5">
                <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-bs-ride="carousel" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="3000">
                      <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active" data-bs-interval="2000">
                          <img src="./images/about.jpg" className="img-fluid"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                          <img src="./images/about2.jpg" className="img-fluid"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                          <img src="./images/about3.jpg" className="img-fluid"/>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                          <img src="./images/about4.jpg" className="img-fluid"/>
                        </div>
                      </div>
                      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    </div>
                </div>
            </section>
      </div>
    </div>
    )
}

export default Home;