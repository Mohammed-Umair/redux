import React from "react";
import { data } from "./moviesData";
import { Card, Button } from "react-bootstrap";
const Movies = () => {
  return (
    <div>
      <h1>Movies:(Data Coustum Made in file )</h1>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((elem) => {
          return (
            <div>
              <Card
                style={{
                  width: "18rem",
                  margin: "15px",
                  padding: "10px",
                  border: "solid black 5px",
                  borderRadius: "15px",
                }}
              >
                <Card.Img variant="top" src={elem.img} height="300px" />
                <Card.Body>
                  <Card.Title>Name:{elem.Name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Movies;
