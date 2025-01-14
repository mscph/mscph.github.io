import React, { useState, useEffect } from 'react';

export default function Carousel() {

  

  const images = [
    "mscpictures/Feb242024/featured_photo1.jpg",
    "mscpictures/Jan182024/featured_photo1.jpg",
    "mscpictures/May142024/featured_photo1.jpg",
    "mscpictures/May222024/featured_photo1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="custom-carousel" className="relative w-full">
      <div className="relative h-96 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* INDICATORS */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? "bg-red-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
