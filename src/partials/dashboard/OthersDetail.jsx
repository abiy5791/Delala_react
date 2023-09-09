import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import useAuthContext from "../../context/AuthContext";

function OthersDetail() {
  const [OtherDetail, setOtherDetail] = useState([]);
  const { user } = useAuthContext();

  const getOther = async () => {
    await axios.get("api/other").then((response) => {
      console.log(response.data);
      setOtherDetail(response.data);
    });
  };
  useEffect(() => {
    getOther();
  }, []);
  console.log(OtherDetail);

  return (
    <div>
      {OtherDetail.map((Other) => (
        <div key={Other.id}>
          <h2 className="font-bold border-b-3 border-cyan-600">
            {Other.title}
          </h2>
          {/* Render other Other details */}
          <div>
            {Other.image.split("|").map((imageUrl, imageIndex) => (
              <img
                width={200}
                height={200}
                key={imageIndex}
                src={`http://127.0.0.1:8000/${imageUrl}`}
                alt={`Other Image ${imageIndex}`}
              />
            ))}
          </div>
          <p>Posted by : {user.id === Other.delala_id && user.name}</p>
          <p>Price: {Other.price}</p>
          <p>Details: {Other.details}</p>
        </div>
      ))}
    </div>
  );
}

export default OthersDetail;
