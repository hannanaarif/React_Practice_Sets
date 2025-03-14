/*
 Given an array of objects representing a list of cars. Each object consists of: id, name, price,
category. Build a React component that shows on the DOM the total number of cars present in
each category. For Example: if there are categories, luxury and sports, where there are 5 luxury
cars and 2 sports car then the data should be represented as:
luxury: 5
sports: 2

Data:
const cars = [
 {
 id: 1,
 name: 'supra',
 price: 500000,
 category: 'sports',
 },
 {
 id: 2,
 name: 'A5',
 price: 700000,
 category: 'luxury',
 },
 {
 id: 3,
 name: 'huyara',
 price: 1500000,
 category: 'sports',
 },
 {
 id: 4,
 name: 'agera R',
 price: 3500000,
 category: 'sports',
 },
]
*/

function Cars({ cars }) {
  let Luxury = 0,
    Sport = 0;

  cars.map((car) => {
    car.category == "luxury" ? Luxury++ : Sport++;
  });

  return (
    <>
      <h2>luxury:{Luxury}</h2>
      <h2>sport :{Sport}</h2>
    </>
  );
}

export default Cars;
