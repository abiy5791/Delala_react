import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuthContext from "../../context/AuthContext";

function LaboursDetail() {
  const [LabourDetail, setLabourDetail] = useState([]);
  const { user } = useAuthContext();

  const getLabour = async () => {
    await axios.get("api/labour").then((response) => {
      console.log(response.data);
      setLabourDetail(response.data);
    });
  };
  useEffect(() => {
    getLabour();
  }, []);
  console.log(LabourDetail);

  return (
    <div>
      {LabourDetail.map((labour) => (
        <div key={labour.id}>
          <h2 className="font-bold border-b-3 border-cyan-600">
            {labour.title}
          </h2>
          <p>Name: {labour.name}</p>
          <p>Skills: {labour.skills}</p>
          {/* Render other labour details */}
          <div>
            {labour.image.split("|").map((imageUrl, imageIndex) => (
              <img
                width={200}
                height={200}
                key={imageIndex}
                src={`http://127.0.0.1:8000/${imageUrl}`}
                alt={`labour Image ${imageIndex}`}
              />
            ))}
          </div>
          <p>Posted by : {user.id === labour.delala_id && user.name}</p>

          <p>Type: {labour.type}</p>
          <p>Salary: {labour.salary} Birr</p>
          <p>Details: {labour.details}</p>
        </div>
      ))}
    </div>
  );
}

export default LaboursDetail;
