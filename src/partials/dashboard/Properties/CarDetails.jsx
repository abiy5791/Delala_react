import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";

function CarDetails() {
  const [carData, setCarData] = useState([]);
  const [user, setUser] = useState([]);

  const getCar = async () => {
    await axios.get("api/car").then((response) => {
      setCarData(response.data);
    });
  };
  useEffect(() => {
    getCar();
  }, []);

  const getUser = async () => {
    await axios.get(`api/users/`).then((response) => {
      setUser(response.data);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {carData.map((car) => (
        <div key={car.id}>
          <h2 className="font-bold border-b-3 border-cyan-600">{car.title}</h2>
          <p>Make: {car.make}</p>
          <p>Model: {car.model}</p>
          <p>Year: {car.year}</p>
          {/* Render other car details */}
          <div>
            {car.image.split("|").map((imageUrl, imageIndex) => (
              <img
                width={100}
                height={100}
                key={imageIndex}
                src={`http://127.0.0.1:8000/${imageUrl}`}
                alt={`Car Image ${imageIndex}`}
              />
            ))}
          </div>
          <div>
            Posted_By_Delala
            {user.map((person) => (
              <p key={person.id}>
                {person.id === car.delala_id && person.name}
              </p>
            ))}
          </div>
          <p>Mileage: {car.mileage}</p>
          <p>FuelType: {car.fueltype}</p>
          <p>Color: {car.color}</p>
          <p>Price: {car.price}</p>
          <p>Details: {car.details}</p>
        </div>
      ))}
    </div>
  );
}

export default CarDetails;
