import React from 'react';
import './Top.css';

function Top() {
    return (
        <div id="carouselExampleControls container" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner image_container">
                <div className="carousel-item active image">
                    <img className="d-block w-100" src="http://images.unsplash.com/photo-1494832944834-a08818c634b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8MXx8cG92ZXJ0eXx8MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.deccanherald.com/sites/dh/files/articleimages/2020/08/18/malnutrition%20istock-1597690592.jpg" alt="Second slide" />
                    </div>
                 <div className="carousel-item">
                    <img className="d-block w-100" src="https://nonprofitquarterly.org/wp-content/uploads/2016/06/Poverty-Porn-771x435.jpg" alt="Third slide" />
                </div> 
            </div>
                {/* <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> */}
        </div>


    )
}

export default Top
