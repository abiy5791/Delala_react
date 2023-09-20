import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuthContext from "../../context/AuthContext";

function ProDetail(props) {
  const [carData, setCarData] = useState([]);

  const { user } = useAuthContext();

  const getCarData = async () => {
    try {
      const response = await axios.get("api/car");
      setCarData(
        response.data.map((car) => ({
          ...car,
          showAllImages: false,
          selectedImage: null,
          expandedDetails: false,
        }))
      );
    } catch (error) {
      console.error("Failed to fetch car data:", error);
    }
  };

  useEffect(() => {
    getCarData();
  }, []);

  const handleImageClick = (carIndex, imageIndex) => {
    setCarData((prevCarData) => {
      const updatedCarData = [...prevCarData];
      updatedCarData[carIndex].selectedImage = imageIndex;
      return updatedCarData;
    });
  };

  const handleViewMore = (carIndex) => {
    setCarData((prevCarData) => {
      const updatedCarData = [...prevCarData];
      updatedCarData[carIndex].showAllImages = true;
      return updatedCarData;
    });
  };

  const handleDetailsToggle = (carId) => {
    setCarData((prevCarData) => {
      const updatedCarData = prevCarData.map((car) => {
        if (car.id === carId) {
          return {
            ...car,
            expandedDetails: !car.expandedDetails,
          };
        }
        return car;
      });
      return updatedCarData;
    });
  };

  const renderCarDetails = (car) => {
    const detailsLimit = 100;
    const shouldTruncate = car.details.length > detailsLimit;

    return (
      <div className="mb-2">
        <strong className="text-gray-700">Details:</strong>{" "}
        <span className="text-gray-800">
          {shouldTruncate && !car.expandedDetails
            ? `${car.details.slice(0, detailsLimit)}...`
            : car.details}
          {shouldTruncate && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => handleDetailsToggle(car.id)}
            >
              {car.expandedDetails ? "See Less" : "See More"}
            </span>
          )}
        </span>
      </div>
    );
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carData.map((car, index) => (
          <div key={car.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500 text-white font-bold text-lg">
                {user.name.charAt(0)}
              </div>
              <div className="ml-2">
                <p className="font-bold text-gray-800">{user.name}</p>
                <p className="text-gray-600 text-sm">{user.email}</p>
              </div>
              <p className="text-gray-600 text-sm ml-auto">Posted by</p>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              {car.title}
            </h2>
            <div className="mb-4 grid grid-cols-3 gap-2">
              {car.image.split("|").map((imageUrl, imageIndex) => {
                const showImage =
                  imageIndex < 3 ||
                  car.showAllImages ||
                  car.selectedImage === imageIndex;

                return (
                  showImage && (
                    <div
                      key={imageIndex}
                      className={`relative rounded-md overflow-hidden ${
                        car.selectedImage === imageIndex ? "opacity-50" : ""
                      }`}
                    >
                      <img
                        className="w-full h-36 object-cover"
                        src={`http://127.0.0.1:8000/${imageUrl}`}
                        alt={`Car Image ${imageIndex}`}
                        onClick={() => handleImageClick(index, imageIndex)}
                      />
                      {car.image.split("|").length > 3 &&
                        imageIndex === 2 &&
                        !car.showAllImages && (
                          <div
                            className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50 text-lg font-bold cursor-pointer"
                            onClick={() => handleViewMore(index)}
                          >
                            +{car.image.split("|").length - 3}
                          </div>
                        )}
                    </div>
                  )
                );
              })}
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">Make:</strong>{" "}
              <span className="text-gray-800">{car.make}</span>
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">Model:</strong>{" "}
              <span className="text-gray-800">{car.model}</span>
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">Year:</strong>{" "}
              <span className="text-gray-800">{car.year}</span>
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">Mileage:</strong>{" "}
              <span className="text-gray-800">{car.mileage}</span>
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">FuelType:</strong>{" "}
              <span className="text-gray-800">{car.fueltype}</span>
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">Color:</strong>{" "}
              <span className="text-gray-800">{car.color}</span>
            </div>
            <div className="mb-2">
              <strong className="text-gray-700">Price:</strong>{" "}
              <span className="text-gray-800">{car.price}</span>
            </div>
            {renderCarDetails(car)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProDetail;
