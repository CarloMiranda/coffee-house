import React, { useState } from 'react';

function About(){
  const [isSpanVisible, setSpanVisible] = useState(false);

  function learnMore() {
    setSpanVisible(!isSpanVisible);
  }
    return(
      <section className="about container">
          <div className="heading text-center m-4 p-4" 
                              data-aos="fade-down"
                              data-aos-easing="linear"
                              data-aos-duration="1000">
              <h1><strong>About Us</strong></h1>
          </div>
            <div className="row justify-content-center">
              <div className="row1 col-md-5">
                  <h2>What Makes Our Coffee Special?</h2>
                  <p className="about-text">
                    I wanted to take this time to let you know how grateful we are to 
                    have you choosing us for your coffee needs. Quality coffee is a passion 
                    for me and I am so thankful for your patronage which allows me to do this. 
                    I wanted to share a little about our coffees, and why I think they are so 
                    special. First of all, we buy our coffee from only the most reputable farms 
                    and mills in Kona.<span style={{ display: isSpanVisible ? 'block' : 'none'}}> Being a teacher in Kona for three decades, I taught some 
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
                    temperature for that size.</span> 
                  </p>
              
                  <div className="buttons p-2">
                      { isSpanVisible ? '' : <button onClick={learnMore} className="about-btn p-1 rounded text-primary">Read More.</button>}
                  </div>
              </div>
              <div className="row2 col-md-5">
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
    )
}

export default About;