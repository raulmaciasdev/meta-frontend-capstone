import { useState } from "react";
import Navigation from "./Navigation";
import hamburger from "../assets/hamburger.png";
import close from "../assets/close.png";
import navLogo from "../assets/nav-logo.png";

const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => setNavbarOpen((open) => !open);

	return (
		<nav>
			<nav className="burger">
				<img
					src={navLogo}
					alt="Little Lemon logo"
					className="nav-image"
				/>
				<button className="burger-icon" onClick={handleToggle}>
					<img src={navbarOpen ? close : hamburger} alt="Navigation Bar" />
				</button>
			</nav>
			<Navigation device="desktop" />
			{navbarOpen ? <Navigation device="mobile" /> : null}
		</nav>
	);
};

export default Navbar;