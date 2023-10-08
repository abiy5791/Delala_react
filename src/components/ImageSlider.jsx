import React, { useEffect } from "react";
import { useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clear interval on unmount
  }, [images]);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-4">
      <div className="relative">
        <div className="w-full h-72 rounded-xl">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt="Property"
              className={`absolute w-full h-full object-cover rounded-xl transition-all duration-700 ease-in-out ${
                index === currentImageIndex
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2 mb-2">
          {images.map((image, index) => (
            <span
              key={index}
              className={`w-10 h-1 mx-1 rounded-full ${
                index === currentImageIndex ? "bg-blue-600" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
        <div className="absolute top-1/2 left-0 right-0 flex justify-between">
          <button
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
