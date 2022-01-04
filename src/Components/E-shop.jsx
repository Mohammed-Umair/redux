import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Eshop = () => {
  const [laila, setLaisa] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((kuchbi) => {
      console.log(kuchbi);
      setLaisa(kuchbi.data);
    });
  }, []);
  return (
    <div>
      <h1>E-Shop</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {laila.map((elem) => {
          return (
            <div style={{ margin: "5px", height: "auto" }}>
              <Card
                style={{
                  width: "15.5rem",
                  borderRadius: "10px",
                  border: "solid 2px black",
                }}
              >
                <Card.Img variant="top" src={elem.image} height="200px" />
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px" }}>
                    Title: <small> {elem.title}</small>
                  </Card.Title>
                  <Card.Text>
                    <details style={{ fontSize: "14px" }}>
                      {elem.description}
                    </details>
                  </Card.Text>
                  <Card.Text>
                    Category: <b> {elem.category}</b>
                  </Card.Text>
                  <Card.Text>
                    In Stock:{" "}
                    <small>
                      {" "}
                      <b>{elem.rating.count}</b>{" "}
                    </small>
                  </Card.Text>
                  <Card.Text>
                    Rating: <u> {elem.rating.rate}</u>
                  </Card.Text>
                  <Button variant="primary">RS/{elem.price}</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Eshop;
