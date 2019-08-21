import * as React from 'react';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {

    return (
        <>
            {/* Carousel for home page */}
            <div className="carousel-home">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="public/images/London.jpg" className="d-block w-100 carousel-height" alt="London" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>London</h5>
                                <p>The mighy Thames river bisects </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="public/images/Berlin.jpg" className="d-block w-100 carousel-height" alt="Berlin" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="public/images/Paris2.jpg" className="d-block w-100 carousel-height" alt="Paris" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="card shadow my-2 mt-2">
                <p className="m-2">We're still building our site, but you can get in touch with us at katiewherenexttravel@gmail.com. Thank you for your interest!</p>
            </div>
            
        </>
    )

}


export default Home;
