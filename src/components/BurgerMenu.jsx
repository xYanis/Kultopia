import "../css/BurgerMenu.css";
import { useState, useEffect } from "react";


function BurgerMenu() {

	// Déclare un état isOpen pour gérer l'ouverture et la fermeture du menu
	const [isOpen, setIsOpen] = useState(false);

	// Fonction pour basculer l'état du menu burger (ouvert/fermé)
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header>
			{/* Div représentant le bouton du menu burger */}
			<div className={`header ${isOpen ? "visible" : ""}`}>
				<div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
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
				</div>
			<div>
            	<img  className="logo" src="src/assets/logo/logo.png" alt="Logo" />
			</div>
		</header>
	);
}

export default BurgerMenu;
