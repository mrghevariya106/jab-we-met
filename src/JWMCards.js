import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./JWMCards.css";
import axios from "./axios.js";

function JWMCards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    console.log(axios)
    async function fetchData() {
      const req = await axios.get("/jwm/cards");
      console.log(req.data)
      setPeople(req.data);
    }

    fetchData();
  }, []);

  const swiped = (direction, nameToDelete) => {
    console.log("Removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="JWMCards">
      <div className="JWMCard_cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default JWMCards;
