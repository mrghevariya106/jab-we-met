import React, { useState } from "react";
import TinderCard from 'react-tinder-card'
import "./JWMCards.css";


function JWMCards() {
  const [people, setPeople] = useState([
    {
        name: "Tony Stark",
        url: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/04/04/Pictures/_8e0b514c-7675-11ea-bbaf-88371e4f22eb.JPG",
      },
      {
        name: "Thor",
        url: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/09/1519729389-thor-ragnarok-reviews-big.jpg?crop=1.00xw:0.923xh;0,0&resize=1200:*",
      },
      {
        name: "Papper",
        url: "https://s3.r29static.com/bin/entry/9d3/x,80/2174391/image.jpg",
      },
      {
        name: "Glane",
        url: "https://www.gizmodo.com.au/content/uploads/sites/2/2017/03/15/ro7mjdfntrspvxru4s1i.jpg",
      }
  ]);

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
              style={{ backgroundImage: `url(${person.url})` }}
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
