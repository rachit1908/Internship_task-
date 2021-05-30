import React from 'react';
export const Cards = () => {
    return(
    <React.Fragment>
    <h1 className='text-center text-danger text-capitalize my-10'>{""}WORLD STARTS HERE!{""}</h1>
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="card" >
                    <img src="https://picsum.photos/203" className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card" >
                    <img src="https://picsum.photos/202" className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-sm">
                <div className="card" >
                    <img src="https://picsum.photos/201" className="card-img-top" alt="..." height="200px" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>)};
