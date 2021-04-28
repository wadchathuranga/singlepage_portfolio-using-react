import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import slide1 from '../../assets/img/carousel/slide1.webp'
import slide2 from '../../assets/img/carousel/slide2.webp'
import slide3 from '../../assets/img/carousel/slide3.webp'
import ScrollDown from '../ScrollDown/ScrollDown.components'

// import slide1 from '../../assets/img/carousel/slide1.jpg'
// import slide2 from '../../assets/img/carousel/slide2.jpg'
// import slide3 from '../../assets/img/carousel/slide3.jpg'

import './mycarousel.style.css'


const MyCarousel = () => {
    return (
        <div id="home">
            <Carousel controls={false} indicators inteval={2500} pauseOnHover={false}>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={slide1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={slide2} alt="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 custom-img" src={slide3} alt="Third slide" />
                </Carousel.Item>
            </Carousel>
            <ScrollDown />
        </div>
    )
}

export default MyCarousel
