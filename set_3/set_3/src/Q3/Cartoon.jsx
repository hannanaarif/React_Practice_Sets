/*
 Use the cartoons data from above question (2) and build a React component to display only the
names of characters whose magnitude is an even number. Use h1 tag to display names. Pass
the entire data as props.


*/

const cartoons = [
    {
      id: 1,
      name: "Mickey Mouse",
      superpower: "Invisibility",
      magnitude: 1,
    },
    {
      id: 2,
      name: "Spongebob Squarepants",
      superpower: "Super Strength",
      magnitude: 3,
    },
    {
      id: 3,
      name: "Bugs Bunny",
      superpower: "Teleportation",
      magnitude: 9,
    },
    {
      id: 4,
      name: "Tom and Jerry",
      superpower: "Intelligence",
      magnitude: 8,
    },
    {
      id: 5,
      name: "The Powerpuff Girls",
      superpower: "Flight",
      magnitude: 10,
    },
  ];
  
  function Cartoon() {
    return (
      <>
        {cartoons
          .filter((Cartoon) => Cartoon.magnitude%2==0)
          .map((cartoon) => (
            <li key={cartoon.id}>
              <strong>{cartoon.name}</strong> - {cartoon.superpower} (Power:{" "}{cartoon.magnitude})
            </li>
          ))}
      </>
    );
  }
  
  export default Cartoon;
  