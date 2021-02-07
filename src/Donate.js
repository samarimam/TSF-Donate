import React from 'react';
import './Donate.css'

function Donate() {
    return (
        <div className="Donate">
                <h1 className="donateh1">Donate</h1>
                <form className="donation">
                    <div class="form-group insert">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group insert">
                        <label for="exampleInputPassword1">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Enter Full Name" />
                    </div>
                    <div class="form-group insert">
                        <label for="exampleInputPassword1">Phone no</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Enter Phone no" />
                    </div>
                    <button type="submit" class="btn btn-primary">Donate</button>
                 </form>
        </div>
    )
}

export default Donate
