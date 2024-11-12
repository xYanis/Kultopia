import "../css/BurgerMenu.css";
import { useState } from "react";

function BurgerMenu() {
	// Déclare un état isOpen pour gérer l'ouverture et la fermeture du menu
	const [isOpen, setIsOpen] = useState(false);

	// Fonction pour basculer l'état du menu burger (ouvert/fermé)
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={`header ${isOpen ? "visible" : ""}`}>
			{/* Div représentant le bouton du menu burger */}
			<div
				className={`burger-menu ${isOpen ? "open" : ""}`}
				onClick={toggleMenu} // Au clic, la fonction toggleMenu est appelée
			>
				{/* Trois lignes qui composent l'icône du menu burger */}
				<span className="span1" />
				<span className="span2" />
				<span className="span3" />
			</div>
			{/* Navigation du menu qui s'affiche en fonction de l'état isOpen */}
			<nav className={`menu ${isOpen ? "visible" : "fade-out"}`}>
				<ul>
					{/* Liens de navigation du menu */}
					<a href="../pages/App.jsx">
						<li>Home</li>
					</a>
					<a href="#">
						<li>Contact</li>
					</a>
					<a href="#">
						<li>About us</li>
					</a>
					<a href="#">
						<li>Update</li>
					</a>
				</ul>
			</nav>
		</header>
	);
}

export default BurgerMenu;
