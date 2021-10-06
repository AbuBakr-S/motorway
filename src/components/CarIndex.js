import React, { useEffect, useState } from 'react';

import CarCard from '../components/CarCard'

const FadeInSection = props => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const CarIndex = () => {

  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);  


  return (
    <>
      <h1>Cars</h1>
      <div className="cards-container">
        {images && images.map(img => (
          <FadeInSection>
            <CarCard key={img.id} img={img}/>
          </FadeInSection>
          
        ))}
      </div>
    </>
  )
}

export default CarIndex