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
			<button onClick={showPreviousCharacter} className="arrow-button left">
				{/* Bouton gauche avec triangle */}
			</button>
			<CharacterCard character={characters[currentIndex]} />
			<button onClick={showNextCharacter} className="arrow-button right">
				{/* Bouton droit avec triangle */}
			</button>
		</div>
	);
}

export default SelectCharacter;
