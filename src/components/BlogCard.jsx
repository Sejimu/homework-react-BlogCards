import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

function BlogCard() {
  const [cards, setCard] = useState([]);
  async function getCards() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/posts");
    console.log(data);
    setCard(data);
  }
  useEffect(() => {
    console.log(cards);
    getCards();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
      }}
    >
      {cards.map((item) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default BlogCard;
