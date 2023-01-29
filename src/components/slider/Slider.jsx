
import React from 'react'

export default function Footer() {
  return (

  		<div id="headerSlider" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#headerSlider" data-slide-to="0" className="active"></li>
                <li data-target="#headerSlider" data-slide-to="1"></li>
                <li data-target="#headerSlider" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="img/slider/header-slider-1.jpg" alt="Royal Hotel"/>
                    <div className="carousel-caption">
                        <h1 className="animated fadeInRight">Nullam mattis</h1>
                    </div>
                </div>
                
                <div className="carousel-item">
                    <img src="img/slider/header-slider-2.jpg" alt="Royal Hotel"/>
                    <div className="carousel-caption">
                        <h1 className="animated fadeInLeft">Lorem ipsum</h1>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="img/slider/header-slider-3.jpg" alt="Royal Hotel"/>
                    <div className="carousel-caption">
                        <h1 className="animated fadeInRight">Phasellus ultrices</h1>
                    </div>
                </div>
            </div>

            <a className="carousel-control-prev" href="#headerSlider" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#headerSlider" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
  	)
}

