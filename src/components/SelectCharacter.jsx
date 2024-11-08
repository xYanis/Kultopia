// SelectCharacter.jsx
import React, { useState } from "react";
import "../css/SelectCharacter.css";

function SelectCharacter() {
  const characters = [
    { name: "Elody", imgSrc: "src/assets/characters/Elody.svg" },
    { name: "Roxane", imgSrc: "src/assets/characters/Roxane.svg" },
    { name: "Lucas", imgSrc: "src/assets/characters/Lucas.svg" },
    { name: "Marjo", imgSrc: "src/assets/characters/Marjo.svg" },
    { name: "Youssef", imgSrc: "src/assets/characters/Youssef.svg" },
    { name: "Tom", imgSrc: "src/assets/characters/Tom.svg" },
    { name: "Yanis", imgSrc: "src/assets/characters/Yanis.svg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pseudo, setPseudo] = useState(""); // State pour le pseudo
  const [error, setError] = useState(""); // State pour l'erreur de validation du pseudo

  const showPreviousCharacter = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? characters.length - 1 : prevIndex - 1
    );
  };

  const showNextCharacter = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === characters.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePseudoChange = (e) => {
    const newPseudo = e.target.value;
    setPseudo(newPseudo);

    // Validation : pseudo doit avoir au moins 2 caractères
    if (newPseudo.length < 2) {
      setError("Le pseudo doit comporter au moins 2 caractères.");
    } else {
      setError("");
    }
  };

  const CharacterCard = ({ character }) => (
    <div className="character-container">
      <div className="image-container">
        <img
          src={character.imgSrc}
          alt={character.name}
          className="character-image"
        />
      </div>
      <h2>{character.name}</h2>
    </div>
  );

  return (
    <div className="character-selector">
      {/* Section pour saisir le pseudo */}
      <div className="pseudo-section">
        <h2>Pseudo</h2>
        <input
          type="text"
          value={pseudo}
          onChange={handlePseudoChange}
          placeholder="Entrez votre pseudo"
          minLength="2"
        />
        {/* Affichage du message d'erreur si le pseudo est trop court */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      {/* Boutons de navigation */}
      <button onClick={showPreviousCharacter} className="arrow-button left">
        {/* Bouton gauche */}
      </button>

      {/* Affichage du personnage sélectionné */}
      <CharacterCard character={characters[currentIndex]} />

      <button onClick={showNextCharacter} className="arrow-button right">
        {/* Bouton droit */}
      </button>
    </div>
  );
}

export default SelectCharacter;

