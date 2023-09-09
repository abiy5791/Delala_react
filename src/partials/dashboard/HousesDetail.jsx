import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuthContext from "../../context/AuthContext";

function HousesDetail() {
  const [HouseData, setHouseData] = useState([]);
  const { user } = useAuthContext();

  const getHouse = async () => {
    await axios.get("api/house").then((response) => {
      console.log(response.data);
      setHouseData(response.data);
    });
  };
  useEffect(() => {
    getHouse();
  }, []);
  console.log(HouseData);

  return (
    <div>
      {HouseData.map((house) => (
        <div key={house.id}>
          <h2 className="font-bold border-b-3 border-cyan-600">
            {house.title}
          </h2>
          <p>Status: {house.status}</p>
          <p>Area: {house.area}</p>
          {/* Render other house details */}
          <div>
            {house.image.split("|").map((imageUrl, imageIndex) => (
              <img
                width={200}
                height={200}
                key={imageIndex}
                src={`http://127.0.0.1:8000/${imageUrl}`}
                alt={`House Image ${imageIndex}`}
              />
            ))}
          </div>
          <p>Posted by : {user.id === house.delala_id && user.name}</p>

          <p>Location: {house.location}</p>
          <p>Price: {house.price}</p>
          <p>Details: {house.details}</p>
        </div>
      ))}
    </div>
  );
}

export default HousesDetail;
