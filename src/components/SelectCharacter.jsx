// SelectCharacter.jsx
import React from "react";

function SelectCharacter() {
  const characters = {
    Elody: {
      name: "Elody",
      imgSrc: "src/assets/characters/Elody.svg"
    },
    Roxane: {
      name: "Roxane",
      imgSrc: "src/assets/characters/Roxane.svg"
    },
    Lucas: {
      name: "Lucas",
      imgSrc: "src/assets/characters/Lucas.svg"
    },
    Marjo: {
      name: "Marjo",
      imgSrc: "src/assets/characters/Marjo.svg"
    },
    Youssef: {
      name: "Youssef",
      imgSrc: "src/assets/characters/Youssef.svg"
    },
    Tom: {
      name: "Tom",
      imgSrc: "src/assets/characters/Tom.svg"
    },
    Yanis: {
      name: "Yanis",
      imgSrc: "src/assets/characters/Yanis.svg"
    }
  };
  return (
    <div>
      <h2>Select Your Character</h2>
      <div className="character-list">
        {Object.values(characters).map((character, index) => (
          <div key={index} className="character-item">
            <img src={character.imgSrc} alt={character.name} />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCharacter;
