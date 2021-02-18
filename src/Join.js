import React from 'react';
import './Join.css';

function Join() {
    return (
        <div className="join">
            <h2>Get in touch</h2>
            <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Message</label>
    <textarea type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Join
