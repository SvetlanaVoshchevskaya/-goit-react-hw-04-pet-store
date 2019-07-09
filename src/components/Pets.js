import React from 'react';
import { Link } from 'react-router-dom';
// import pets from '../server/pets.json';

const Pets = pets => (
  <ul>
    {pets.map(pet => (
      <li key={pet.id}>
        <Link to={`/pets/${pet.id}`} />
        <img src={pet.image} alt="" /> <p>{pet.name}</p>
      </li>
    ))}
  </ul>
);
export default Pets;
