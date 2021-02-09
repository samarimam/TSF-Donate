import React from 'react';
import './Top.css';

function Top() {
    return (
        <div id="carouselExampleControls container" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner image_container">
                <div className="carousel-item active image">
                {/* <img className="d-block w-100" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt="First slide" /> */}
                    <img className="d-block w-100" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="" alt="Second slide" />
                    </div>
                 <div className="carousel-item">
                    <img className="d-block w-100" src="..." alt="Third slide" />
                </div> 
            </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
        </div>


    )
}

export default Top
