import React from 'react';
import './Top.css';

function Top() {
    return (
        <div id="carouselExampleControls " class="carousel slide" data-ride="carousel">
            <div class="carousel-inner image_container">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9vciUyMGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt="First slide" />
                </div>
                {/* <div class="carousel-item">
                    <img class="d-block w-100" src="" alt="Second slide" />
                    </div>
                 <div class="carousel-item">
                    <img class="d-block w-100" src="..." alt="Third slide" />
                </div> */}
            </div>
                {/* <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> */}
        </div>


    )
}

export default Top
