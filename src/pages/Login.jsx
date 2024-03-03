import React from 'react';

function Login() {

    return(
        <div class='container'>
            <div className="row bg-light my-5 rounded shadow">
                <div className='col-md-6 p-5'>  
                <h1 className='text-center mt-5'>Login</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> <br/>
                        <label for="exampleInputEmail1">Password</label>
                        <input type="password" className="form-control" id="email1" aria-describedby="passwordHelp" placeholder="Enter password" />
                        <div className='my-2 d-flex justify-content-between'>
                            <div>
                                <input type='checkbox' className='form-check-input' id='exampleCheck1' />
                                <label className='form-check-label ms-2' for='rememberme'>Remember me</label>
                            </div>
                            <a href='#!'>Forgot password?</a>
                        </div>
                        <input className='btn btn-primary' type='submit' value='Login' />
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='d-flex justify-content-center'>
                        <img src="./images/coffee.png" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;