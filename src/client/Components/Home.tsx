import * as React from 'react';

export interface HomeProps {

}

const Home: React.SFC<HomeProps> = () => {
    return (
        <>
            <div className="container">
                <section className="row">
                    <div className="col-md-12 carousel slide" data-ride="carousel" id="slide-show">

                        <ol className="carousel-indicators">
                            <li data-target="#slide-show" data-slide-to="0" className="active"></li>
                            <li data-target="#slide-show" data-slide-to="1"></li>
                        </ol>

                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="London"/>
                                <div className="carousel-caption">
                                    <h1>London and the Mighty Thaimes</h1>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1541004610042-8d31ca3fdf87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Cambridge"/>
                                <div className="carousel-caption">
                                    <h1>Cambridge</h1>
                                </div>
                            </div>
                        </div>

                        <a href="#slide-show" className="left carousel-control" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            {/* Screen-reader aide */}
                            <span className="sr-only">Previous</span>
                        </a>

                        <a href="#slide-show" className="right carousel-control" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            {/* Screen-reader aide */}
                            <span className="sr-only">Next</span>
                        </a>

                    </div>
                </section>
            </div>

        </>
    );
}

export default Home;

//https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
//https://images.unsplash.com/photo-1541004610042-8d31ca3fdf87?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80