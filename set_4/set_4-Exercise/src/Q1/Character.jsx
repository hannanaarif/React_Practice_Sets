/*
Given an array of characters, build a Tab component in React that shows the name of
characters on click of two buttons, one for heroes and other for villains. On click of “Show
Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list
of villains should be displayed on the DOM. Use useState Hook.

*/

import { useState } from "react";

const characters = {
  heroes: [
    {
      name: "IRON MAN",
      powers: "Genius,Rich,IRON Suit",
      costume: "IRON MAN suit",
    },
    {
      name: "ANT MAN",
      powers: "Ant man suit",
      costume: "Ant man suit",
    },
    {
      name: "Spider-man",
      powers: "Reflexes,Speed,Spider-Sense",
      costume: "Spider Suit",
    },
    {
      name: "Bat man",
      powers: "Rich,Bat suit",
      costume: "Bat Suit",
    },
    {
      name: "Super-man",
      powers: "Superhuman strength,Reflexes,Speed",
      costume: "Superman Suit",
    },
  ],

  villains: [
    {
      name: "Thanos",
      powers: "Superhuman strength,Reflexes,Speed,",
      costume: "Metal armor",
    },
    {
      name: "Venom",
      powers: "shapeshifting and camouflage Symbiotes autonomous defense",
      costume: "black suit",
    },
    {
      name: "Kang the conqueror",
      powers: "time travel, can access all tech",
      costume: "kang armor",
    },
    {
      name: "Joker",
      powers: "clownlike appearance and sick humour",
      costume: "Joker costume",
    },
  ],
};

function Character() {
    const [heroesList, setHeroesList] = useState([]);
    const [VillianList, setVillianList] = useState([]);
    
  function handleHero() {
    setVillianList([]);
    setHeroesList(
        characters.heroes.map((hero)=>(
            <li key={hero.name}>
          <strong>{hero.name}</strong> - Powers: {hero.powers}, Costume: {hero.costume}
        </li>
        ))
    )
   
  }

  function handleVillian(){
    setHeroesList([])
    setVillianList(
        characters.villains.map((hero)=>(
            <li key={hero.name}>
          <strong>{hero.name}</strong> - Powers: {hero.powers}, Costume: {hero.costume}
        </li>
        ))
    )
  }

  return (
    <>
      <button onClick={handleHero}>Show Heros</button>
      <button onClick={handleVillian}>Show Villians</button>
      <p>{heroesList}</p>
      <p>{VillianList}</p>
    </>
  );
}
export default Character;
