import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Topbanner.css'

const TopBanner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://i.pinimg.com/originals/46/23/be/4623be957bf8e0afa503c78fce3d6b52.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className=" color">KTM RC 200 & 390</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://www.modifiedx.com/wp-content/uploads/2020/08/modified-ktm-rc200-in-neon-green-highway.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h1 className="color">Bumblebee Modified KTM RC200.</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                style={{height:'80vh',objectFit:'cover'}}
                className="d-block w-100"
                src="https://i.ytimg.com/vi/q3TMsV3AKoo/maxresdefault.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h1 className="color">Ktm rc 200 best modified bikesBest modification everKtm rc 200 modified colour</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default TopBanner;