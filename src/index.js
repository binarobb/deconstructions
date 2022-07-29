// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import animals, { useAnimals } from "./data";

// const [cat, dog] = animals;
// console.log(useAnimals(cat));

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal)
// makeSound();

// const {name, sound, feedingRequirements:{ food, water}} = cat;

// console.log(food);

const {
  honda,
  tesla,
  speedStats: { topSpeed, zeroToSixty }
} = cars;

console.log(coloursByPopularity);
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
