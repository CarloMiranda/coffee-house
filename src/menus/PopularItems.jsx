

function PopularItems(){

    return(
        <section>
            <h3>Popular Items</h3>
            <hr />
            <div className="row justify-content-center">
                <button className="menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <img src="./menu/tiramisu.png" alt="White Chocolate Tiramisu" className="img-fluid" />
                    <div>
                        <p className="mb-5">White Chocolate Tiramisu</p>
                        <p className="price">Php 250.00</p>
                    </div>
                </button>
                <button className="menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <img src="./menu/caramel.png" alt="Caramel Latte" className="img-fluid" />
                    <div>
                        <p className="mb-5">Caramel Latte</p>
                        <p className="price">Php 250.00</p>
                    </div>
                </button>
                <button className="menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <img src="./menu/frappe.png" alt="frappe" className="img-fluid" />
                    <div>
                        <p className="mb-5">Frappe</p>
                        <p className="price">Php 250.00</p>
                    </div>
                </button>
                <button className="menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <img src="./menu/waffles.png" alt="Chicken n Waffles" className="img-fluid" />
                    <div>
                        <p className="mb-5">Chicken n' Waffles</p>
                        <p className="price">Php 250.00</p>
                    </div>
                </button>
                <button className="menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <img src="./menu/hotchoco.png" alt="hot chocolate" className="img-fluid" />
                    <div>
                        <p className="mb-5">Hot Chocolate</p>
                        <p className="price">Php 250.00</p>
                    </div>
                </button>
                <button className="menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <img src="./menu/bfast1.png" alt="Chicken Cheese Biscuit" className="img-fluid" />
                    <div>
                        <p className="mb-5">Chicken Cheese Biscuit</p>
                        <p className="price">Php 250.00</p>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default PopularItems;