

function Career(){

    return(
        // <!-- Content start -->
        <div className="container">
            <div className="career-text">
                <div className="text-center m-5 p-5" id="topparagraph" data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1000">
                    <h2 className="pb-4"><q>WORK WITH US NOW</q></h2>
                    <p className="pb-4">Coffee House has been a caring company from the very beginning. We care about who we are, who we serve and what we do. We want every guest to walk away from a Coffee House having experienced genuine and sincere customer service that puts a smile on their face and makes them just plain feel better.</p>
                    <p className="pb-4">Coffee shops occupy an important space in many of our lives because of their unique ability to fulfill so many of our needs: socializing, studying, working, resting, reading — in an atmosphere that suits our tastes and makes us feel like we belong. At their best, coffee shops are places that meet the needs of a community, while giving communities the space they need to get together.</p>
                    <p className="pb-4">This sense of community is what Coffee House Cafe is all about. In fact, the atmosphere that makes Just Love Coffee Cafe so special was created to be a complete 180 from the stuffy reputation that specialty coffee shops rightly or wrongly deserve.</p>
                </div>
                <div className="row" id="column">
                    <div className="row1 col-md-6">
                        <h3>GOAL: PUT A SMILE ON EVERY FACE</h3>
                        <p>“We wanted our space to be welcoming to everyone, whether they like high-end coffee or like Folgers,” says Jason Smith, Roastmaster with Coffee House Cafe. “We worked hard to create an atmosphere that went beyond coffee, as well — from the charitable nature of our brand and the inclusivity of our design that opens the space to a wide variety of social and independent activity, to the playful nature of our food menu that really creates a memorable experience and is a great conversation-starter.”</p>
                        <p>Coffee House Cafe goes beyond the traditional specialty coffee shop by encouraging guests to bring their children, and setting up classNameic arcade games to create an atmosphere that is fun and exciting no matter how old you are.</p>
                        <p>If you are interested in joining our team, please fill out the form below.</p>
                    </div>
                    <div className="row2 col-md-6">
                        <div className="card"  data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="3000">
                            <img src="./images/about.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- form start --> */}
            <div className="col-md-6 p-5 ">
                <div className="container-fluid">
                  <h1 className="mb-4"><b>Job Application</b></h1>
                  <div className="mb-4">
                    <h5>Applaying For Possition</h5>
                        <input type="checkbox" id="barista"/><span> </span>
                        <label htmlFor="barista" className="form-text"> Barista</label><span> </span>
                        <input type="checkbox" id="waiter"/><span> </span>
                        <label htmlFor="waiter" className="form-text"> Waiter</label><span> </span>
                        <input type="checkbox" id="line-cook"/><span> </span>
                        <label htmlFor="line-cook" className="form-text"> Line Cook</label><span> </span>
                  </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="inputfirstname" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="inputFirsname"/>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="inputlastname" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastname"/>
                      </div>
                    </div>       
                    <div className="col-md-6">
                        <label htmlFor="inputnumber" className="form-label">Phone Number</label>
                        <input className="form-control" type="text" id="inputnumber"/>
                      </div>
                    <div className="col-md-auto">
                      <label htmlFor="inputemail" className="form-label">Email Address</label>
                      <input className="form-control" id="inputemail" type="text"/>
                    </div>
                    <div className="col-md-auto">
                      <label htmlFor="inputAddress" className="form-label">Complete Address</label>
                      <input className="form-control" id="inputAddress" type="text"/>
                    </div>
                    <div>
                        <p>Are you over the age of 18?</p>        
                            <input type="checkbox" id="option1"/><span> </span>
                            <label htmlFor="option1" className="form-text">Yes</label>
                        <br/>
                            <input type="checkbox" id="option2"/><span> </span>
                            <label htmlFor="option2" className="form-text">No</label>
                        <br/>
                    </div>
                    <div>
                        <p>Do you have a reliable way to get to and from work?</p>        
                            <input type="checkbox" id="option3"/><span> </span>
                            <label htmlFor="option3" className="form-text">Yes</label>
                        <br/>
                            <input type="checkbox" id="option4"/><span> </span>
                            <label htmlFor="option4" className="form-text">No</label>
                        <br/>
                    </div>
                    <div>
                        <p>Education</p>        
                            <input type="checkbox" id="option5"/><span> </span>
                            <label htmlFor="option5" className="form-text">In High School</label>
                        <br/>
                            <input type="checkbox" id="option6"/><span> </span>
                            <label htmlFor="option6" className="form-text">High School Graduate</label>
                        <br/>
                            <input type="checkbox" id="option7"/><span> </span>
                            <label htmlFor="option7" className="form-text">Some College</label>
                        <br/>
                            <input type="checkbox" id="option8"/><span> </span>
                            <label htmlFor="option8" className="form-text">Complete College Degree or More</label>
                        <br/>
                    </div>
                    <div>
                        <p>Are you over the age of 18?</p>        
                            <input type="checkbox" id="option9"/><span> </span>
                            <label htmlFor="option9" className="form-text">Full-time</label>
                        <br/>
                            <input type="checkbox" id="option10"/><span> </span>
                            <label htmlFor="option10" className="form-text">Part-Time</label>
                        <br/>
                    </div>
                    <div>
                        <p>Are you willing to cross-train between kitchen and barista position?</p>        
                            <input type="checkbox" id="option11"/><span> </span>
                            <label htmlFor="option11" className="form-text">Yes</label>
                        <br/>
                            <input type="checkbox" id="option12"/><span> </span>
                            <label htmlFor="option12" className="form-text">No</label>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="comments1" className="form-label">Which days and hours are available to work?</label>
                        <br/>
                        <textarea className="form-control" id="comments1"></textarea>
                        <br/>
                        <label htmlFor="comments2" className="form-label">Please explain any previous work experience below.</label>
                        <br/>
                        <textarea className="form-control" id="comments2"></textarea>
                        <span className="form-text">(Disregard if you uploading a resume)</span>
                        <br/>
                        <label htmlFor="comments3" className="form-label">Describe an instance when you went above and beyond for a customer (or stranger).</label>
                        <br/>
                        <textarea className="form-control" id="comments3"></textarea>
                        <br/>
                        <label htmlFor="comments4" className="form-label">Why do you want to work for Coffee House?</label>
                        <br/>
                        <textarea className="form-control" id="comments4"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="fileUpload" className="form-label">Upload Resume</label>
                        <br/>
                        <input type="file" className="form-control-file" id="fileUpload" accept=".pdf,.doc,.txt"/>
                        <br/>
                        <span className="form-text">Max. file size: 50 MB.</span>
                    </div>  
                  <hr/>
                    <button className="col-md-4 bg-primary text-light border border-white p-2 rounded">SUBMIT</button>
                    <br/>
                </div>
            </div>
      </div>
    )
}

export default Career;