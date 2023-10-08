// import React, { useState, useEffect } from "react";

// const images = [
//   "https://f.nooncdn.com/mpcms/EN0001/assets/8ab14524-5e6f-435c-9caf-2152eee64d94.png?format=avif",
//   "https://f.nooncdn.com/mpcms/EN0001/assets/14251040-0228-4f8a-a5bf-b22d90a35fb3.png?format=avif",
//   "https://f.nooncdn.com/mpcms/EN0001/assets/8ab14524-5e6f-435c-9caf-2152eee64d94.png?format=avif",
//   "https://f.nooncdn.com/mpcms/EN0001/assets/8ab14524-5e6f-435c-9caf-2152eee64d94.png?format=avif",
// ];

// const CircleSlider = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex items-center justify-center h-10">
//       <div className="w-48 h-48 rounded-full overflow-hidden">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Image ${index + 1}`}
//             className={`absolute w-40 h-40 transform ${
//               index === currentImage ? "scale-100" : "scale-0"
//             } transition-all duration-500`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CircleSlider;

// import React from "react";

// const CircleSlider = ({ images }) => {
//   return (
//     <div className="flex items-center justify-center space-x-4">
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg"
//         >
//           <img
//             src={image}
//             alt={`Image ${index + 1}`}
//             className="object-cover w-full h-full"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CircleSlider;
// import React, { useEffect } from "react";
// import { useState } from "react";

// const CircleSlider = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(timer); // Clear interval on unmount
//   }, [images]);

//   const handlePrevious = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="p-4">
//       <div className="relative">
//         <div
//           className="w-full h-72 rounded-xl overflow-hidden flex"
//           style={{
//             transform: `translateX(-${currentImageIndex * 100}%)`,
//             transition: "transform 0.7s ease-in-out",
//           }}
//         >
//           {images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt="Property"
//               className="w-50 h-50 object-cover"
//             />
//           ))}
//         </div>
//         <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2 mb-2">
//           {images.map((image, index) => (
//             <span
//               key={index}
//               className={`w-10 h-1 mx-1 rounded-full ${
//                 index === currentImageIndex ? "bg-blue-600" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//         <div className="absolute top-1/2 left-0 right-0 flex justify-between">
//           <button
//             className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
//             onClick={handlePrevious}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M15 19l-7-7 7-7"
//               />
//             </svg>
//           </button>
//           <button
//             className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
//             onClick={handleNext}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M9 5l7 7-7 7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CircleSlider;

import React, { useState, useEffect } from "react";

const CircleSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerPage = 6;
  const totalSlides = Math.ceil(images.length / imagesPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const renderImages = () => {
    const start = currentSlide * imagesPerPage;
    const end = start + imagesPerPage;

    return images.slice(start, end).map((image, index) => (
      <div key={index} className="w-1/3 px-2">
        <img src={image} alt={`Image ${index}`} className="h-50 w-50" />
      </div>
    ));
  };

  return (
    <>
      <div className="flex items-center justify-center p-8">
        <div className="relative w-full">
          <div className="flex transition-transform duration-500 p-8">
            {renderImages()}
          </div>
          <div className="p-4">
            <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-2 mb-2">
              {Array.from(Array(totalSlides).keys()).map((index) => (
                <div
                  key={index}
                  className={`h-2 w-2 bg-gray-500 rounded-full mx-1 cursor-pointer ${
                    index === currentSlide ? "bg-gray-900" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
            <div className="absolute top-1/2 left-0 right-0 flex justify-between">
              <button
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none"
                onClick={prevSlide}
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
                onClick={nextSlide}
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
      </div>
    </>
  );
};

export default CircleSlider;
