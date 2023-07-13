

function Blogs(){

    return(
        <>
    <div className="container">
            {/* Gallery */}
            <section className="row bg-light p-4 pt-5 mt-4 pb-5 rounded-5">
                <div className="fw-bold text-center pb-5" 
                                data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">
                    <h1>Gallery</h1>
                </div>
                    <div className="row">           
                        <div className="col-md-4 py-3 py-md-2">
                            <div className="card" data-aos="zoom-in">
                            <img src="./images/image1.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-2">
                            <div className="card" data-aos="zoom-in">
                            <img src="./images/image2.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-2">
                            <div className="card" data-aos="zoom-in">
                            <img src="./images/image3.png" className="img-fluid" />
                            </div>
                        </div>  
                        </div>
            
                        <div className="row">           
                        <div className="col-md-4 py-3 py-md-2">
                            <div className="card" data-aos="zoom-in">
                            <img src="./images/image4.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-2">
                            <div className="card" data-aos="zoom-in">
                            <img src="./images/image6.png" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-4 py-3 py-md-2">
                            <div className="card" data-aos="zoom-in">
                            <img src="./images/image5.png" className="img-fluid" />
                            </div>
                        </div> 
                    </div>

            </section>

            {/* Blog */}
            <section className="row bg-light p-4 mt-5 pb-5 pt-5 rounded-5">
                <div className="fw-bold text-center pb-5" data-aos="fade-down">
                    <h1>Latest Blogs</h1>
                </div>
                <div className="container">
                    <div className="row"> 
                        <div className="col-md-4 py-3 py-md-2">
                            <div className="card rounded-4">
                                <img className="img-fluid rounded-4" data-aos="flip-left" src="./images/b1.png" />
                                <div className="card-body">
                                    <h3>Coffee House.</h3>
                                    <h5>Admin / 6 April 2020</h5>
                                    <p>Coffee House shares an abundance of resources in the coffee world 
                                        that are extremely useful for individuals branching into the industry.</p><p hidden> 
                                        Watch available videos for an overview of equipment and use the learning
                                        center to improve your coffee knowledge. Read a library of informative 
                                        articles including product maintenance, product reviews, and product 
                                        comparisons. Prima Coffee also has an online shop where coffee equipment 
                                        is available for purchase.</p>
                                    <button className="border p-2 rounded" id="blog-btn">Read More.</button>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-4 py-3 py-md-2"> 
                            <div className="card rounded-4">
                                <img className="img-fluid rounded-4" data-aos="flip-up" src="./images/b2.png" />
                                <div className="card-body">
                                    <h3>Kate MacDonnell</h3>
                                    <h5>Admin / 20 May 2021</h5>
                                    <p>Kate has been a coffee enthusiast since she could reach the kitchen 
                                        counter and a writer since she could hold a pen. A native of Colorado, 
                                        she loves</p><p hidden> drinking amazing coffee all over the world and has an 
                                        ever-growing collection of coffee gear.</p>
                                        <p hidden>She’s sipped espresso with yuzu in Thailand, goat milk 
                                        caramel lattes in Mexico, buttery white coffee in Malaysia, and 
                                        cream cheese coffee in Korea. At a coffee plantation in Tanzania, 
                                        Kate roasted coffee beans over an open fire — and probably still 
                                        smells like coffee. Trust us: you can’t get that aroma out of your 
                                        hair! At home, her favorite brewing method is smooth, clear 
                                        Chemex — although the Wacaco Minipresso is a close second. 
                                        She enjoys writing for coffee websites and sampling every kind 
                                        of coffee known to man.</p>
                                    <button className="border p-2 rounded" id="blog-btn">Read More.</button>
                                </div>
                            </div> 
                        </div>
                        <div className="col-md-4 py-3 py-md-2"> 
                            <div className="card rounded-4">
                                <img className="img-fluid rounded-4" data-aos="flip-right" src="./images/b3.png" />
                                <div className="card-body">
                                    <h3>Cofee House</h3>
                                    <h5>Admin / 15 June 2022</h5>
                                    <p>Coffe House demonstrates how we can all be involved in 
                                        supporting the coffee supply chain in a positive manner through 
                                        its superb educational</p><p hidden> resources. Work your way through articles 
                                        on topics from farming and trade, to serving up an ethical coffee 
                                        in your shop. Henry learned his barista skills in Ecuador. Perfect 
                                        Daily Grind flourishes as a platform where diversity is encouraged, 
                                        education is key, and the chain is the delicate heart of the coffee 
                                        world. Whether you are a barista, own a coffee shop, or want to learn
                                        more about the coffee process, Coffee House blogs will lead
                                        you on the path of success.</p>
                                    <button className="border p-2 rounded" id="blog-btn">Read More.</button>
                                </div>
                            </div>  
                        </div> 
                    </div> 
                </div>
            </section>       
    </div>        
        </>
    )
}

export default Blogs;