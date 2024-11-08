import "../css/BurgerMenu.css";
import { useState } from "react";

function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={`header ${isOpen ? "visible" : ""}`}>
			<div
				className={`burger-menu ${isOpen ? "open" : ""}`}
				onClick={toggleMenu}
			>
				<span className="span1" />
				<span className="span2" />
				<span className="span3" />
			</div>
			<nav className={`menu ${isOpen ? "visible" : ""}`}>
				<ul>
					<a className="home" href="../pages/App.jsx">
						<li>Home</li>
					</a>
					<a className="contact" href="#">
						<li>Contact</li>
					</a>
					<a className="about" href="#">
						<li>About us</li>
					</a>
					<a className="update" href="#">
						<li>Update</li>
					</a>
				</ul>
			</nav>
		</header>
	);
}

export default BurgerMenu;
