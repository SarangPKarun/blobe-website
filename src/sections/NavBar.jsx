import { useState } from "react";
import { Link } from "react-router-dom"; // Optional if you still want routing in future

const NavItems = ({ links }) => {
  return (
    <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-center">
      {links.map(({ id, href, name }) => (
        <li key={id}>
          <a
            href={href} // href will scroll to the respective section
            className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, href: "#home", name: "Home" },
    { id: 2, href: "#about", name: "About" },
    { id: 3, href: "#contact", name: "Contact" },
    { id: 4, href: "#download", name: "Download" },
  ];

  const ToggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="#home"
            className="text-white text-2xl font-bold hover:text-blue-400 transition-colors"
          >
            Blobe
          </a>

          {/* Hamburger Menu for Small Screens */}
          <button
            onClick={ToggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden transition-colors"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <NavItems links={navLinks} />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-black transition-all duration-300 ${
          isOpen ? "max-h-screen py-5" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center">
          <NavItems links={navLinks} />
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
