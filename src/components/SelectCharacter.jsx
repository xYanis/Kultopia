// SelectCharacter.jsx
import React from "react";
import "../css/SelectCharacter.css";

function SelectCharacter() {
	const characters = {
		Elody: {
			name: "Elody",
			imgSrc: "src/assets/characters/Elody.svg",
		},
		Roxane: {
			name: "Roxane",
			imgSrc: "src/assets/characters/Roxane.svg",
		},
		Lucas: {
			name: "Lucas",
			imgSrc: "src/assets/characters/Lucas.svg",
		},
		Marjo: {
			name: "Marjo",
			imgSrc: "src/assets/characters/Marjo.svg",
		},
		Youssef: {
			name: "Youssef",
			imgSrc: "src/assets/characters/Youssef.svg",
		},
		Tom: {
			name: "Tom",
			imgSrc: "src/assets/characters/Tom.svg",
		},
		Yanis: {
			name: "Yanis",
			imgSrc: "src/assets/characters/Yanis.svg",
		},
	};

	// Composant pour afficher un personnage
	const CharacterCard = ({ character }) => {
		return (
			<div className="character-container">
				<div className="image-container">
					<img
						src={character.imgSrc} // Utilise imgSrc pour l'image
						alt={character.name}
						className="character-image"
					/>
				</div>
			</div>
		);
	};

	return (
		<div className="character-list">
			{Object.values(characters).map((character) => (
				<CharacterCard key={character.name} character={character} />
			))}
		</div>
	);
}

export default SelectCharacter;
