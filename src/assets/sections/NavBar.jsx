import { useState } from "react"
import {navLinks} from "../constants/index.js";

// const NavItems = () => {
//     return(
//         <ul className="nav-ul">
//             {["Home", "About", "Contact"].map(
//                 (item, index) => (
//                     <li key={index} className="nav-li">
//                         <a href="/" className="nav-li_a">{item}</a>
//                     </li>
//                 ))}
//         </ul>
//     )
// }

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a">{name}</a>
                </li>
            ))}
        </ul>
    )
}
const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const ToggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90 '>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                    Blobe</a>
                    <button onClick={ToggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex transition-colors" aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6"/>
                    </button>

                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default NavBar