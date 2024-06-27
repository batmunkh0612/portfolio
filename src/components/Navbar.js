import sunIcon from "./../assets/sun.png";
import hamburgerIcon from "../assets/hamburger.png";
import { navMenus } from "../constants";

const NavLink = ({ children }) => (
  <a href={children} className="text-base font-medium leading-6 text-left text-gray-600 font-inter">
    {children}
  </a>
);


export const Navbar = ({ handlerClick }) => {
  return (
    <div className="flex items-center justify-between p-4 md:px-8">
      <div className="leading-9 text-center text-gray-900 ont-bold font-inter text-custom tracking-custom-neg">
        {"<SS />"}
      </div>
      <div className="md:hidden" onClick={handlerClick}>
        <img src={hamburgerIcon} alt="Menu-icon" className="cursor-pointer" />
      </div> 
      <div className="items-center hidden gap-5 md:flex">
        {navMenus.map(item => (
          <NavLink key={item}>{item}</NavLink>
        ))}
        <span className="h-6 border-r border-gray-200" />
        <div className="flex items-center gap-4">
          <img
            src={sunIcon}
            alt="Toggle theme"
            className="cursor-pointer p-1.5 rounded-lg"
          />
          <button className="px-4 py-1.5 bg-gray-900 text-white rounded-xl max-w-fit">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
