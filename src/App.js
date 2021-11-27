import './App.css';
import ImageData from './component/ImageData'
import { useState } from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
import ImageSlider from './component/ImageSlider';

function App() {

  const [status, setStatus] = useState(0)
  const length = ImageData.length

  const nextSlide = () => {
    (status === length - 1 ? setStatus(0) : setStatus(status + 1))
  }

  const prevSlide = () => {
    (status === 0 ? setStatus(length - 1) : setStatus(status - 1))
  }

  const data = ImageData.map((item, index) => (
    <div className={index === status ? 'slide active' : 'slide'} key={item.id}>
      {index === status && (
        <img 
          src={item.image} 
          alt="" 
          className="image-slider"
          id={status}
        />
      )}
    </div>
  ))

  return (
    <div class="container">
      <h1>Carousel Slide Image</h1>
      <div className="carousel-image">
      
        <FcNext color="red" className="carousel-image-next-btn" onClick={nextSlide}/>
        <FcPrevious className="carousel-image-prev-btn" onClick={prevSlide}/>
        {data}
      </div>
      <ImageSlider data={ImageData} />
    </div>

  );
}

export default App;
