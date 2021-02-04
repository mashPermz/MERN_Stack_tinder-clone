import React, { useState } from 'react';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url: 'https://source.unsplash.com/random/400x400',
    },
    {
      name: 'Jeff Bezos',
      url: 'https://source.unsplash.com/random/400x400',
    },
  ])

  return (
    <div className="tinderCards">
      
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
    </div>
  );
}

export default TinderCards
