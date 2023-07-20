function Contact(){

    return(
        <section className="container">
              <div className="contact row justify-content-center border rounded-5 bg-light"  data-aos="flip-up"> 
                <div className="col-md-5">
                    <div className="heading">
                        <h1>Contact Us</h1>
                    </div>
                    <input autoComplete="name" type="text" id="name" className="form-control m-3" placeholder="Name" aria-label="default input"/>
                    <input autoComplete="email" type="email" id="email" className="form-control m-3" placeholder="Email" aria-label="default input"/>
                    <input autoComplete="number" type="number"  id="number" className="form-control m-3" placeholder="Phone" aria-label="default input"/>
                    <textarea className="form-control m-3" id="comments"  placeholder="Your Message" aria-label="default input"></textarea>
                    <button id="contact-btn" className="form-control bg-primary m-3">Send Message</button>
                </div> 
                <div className="col-md-6 ps-5">
                  <h1>CONTACTS</h1>
                  <p><i className="fa-regular fa-envelope"></i>  coffeehouse@gmail.com</p>
                  <p><i className="fa-solid fa-phone"></i>  +63 9958515373</p>
                  <p><i className="fa-solid fa-building-columns"></i>  18th Floor, W Fifth, 5th Avenue, Taguig, 1630 Metro Manila</p>
                </div>  
              </div>
        </section>
    )
}

export default Contact;