import axios from "axios";
import React, { useState, useEffect } from "react";

const Mobiles = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => console.log("Check error", error));
  }, [   ]);
  return (
    <div>
      <h1>JSON API CALL</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {data.map((item) => {
          return (
            <div
              style={{
                backgroundColor: "cyan",
                margin: "4px",
                width: "24%",
                border: "solid 2px black",
              }}
            >
              <h1> User ID:{item.userId}</h1>
              <h2>Id:{item.id} </h2>
              <p>Title:{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Mobiles;
