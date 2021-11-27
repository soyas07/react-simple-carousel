import React from 'react'
import './ImageSlider.css'
import Carousel from 'react-elastic-carousel'

function ImageSlider( {data} ) {

    const images = data.map((items, index) => (
        <img src={items.image} alt="" className="carousel-slider" />
    ))

    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 1},
        {width: 768, itemsToShow: 2},
        {width: 1200, itemsToShow: 3},
    ]

    return (
        <div className="carousel-container">
            <h1>Carousel Image Slider</h1>
            <Carousel breakPoints={breakPoints}>
                {images}
            </Carousel>
        </div>
    )
}

export default ImageSlider
