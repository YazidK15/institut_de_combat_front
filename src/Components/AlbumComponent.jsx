import React, { useState } from 'react'
import '../styles/album.css';
import img1 from '../assets/images/salle.png'
import img2 from '../assets/images/kick.jpg'
import img3 from '../assets/images/theo.jpeg'




function AlbumComponent() {

    const images = [img1, img2, img3];

        const [currentIndex, setCurrentIndex] = useState(0);
      
        const prevImage = () => {
          setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        };
      
        const nextImage = () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        };
      
        const showImage = (index) => {
          setCurrentIndex(index);
        };

  return <>
  
  <div className="gallery-container">
      <div className="main-image">
        <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      <button className="prev" onClick={prevImage}>❮</button>
      <button className="next" onClick={nextImage}>❯</button>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            className="thumbnail"
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => showImage(index)}
          />
        ))}
      </div>
    </div>
  
  </>
}

export default AlbumComponent