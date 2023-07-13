function Contact(){

    return(
    <div className="container">
        <section className="container">
              <div className="row justify-content-center border rounded-5 m-5 bg-light p-5"  data-aos="flip-up"> 
                <div className="col-md-5">
                    <div className="heading">
                        <h1>Contact Us</h1>
                    </div>
                    <input type="text" className="form-control m-3" placeholder="Name" aria-label="default input"/>
                    <input type="email" className="form-control m-3" placeholder="Email" aria-label="default input"/>
                    <input type="number" className="form-control m-3" placeholder="Phone" aria-label="default input"/>
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
    </div>
    )
}

export default Contact;