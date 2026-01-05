import { useState } from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Dropdown from "./Dropdown";
import SearchInput from "./SearchInput";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["HOME", "SERVICES", "ABOUT US", "GALLERY", "CONTACT US"];

  return (
    <header className="bg-white top-0 z-50 w-full shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">

        {/* DESKTOP HEADER ROW */}
        <div className="hidden lg:grid items-center py-3 lg:py-4"
          style={{ gridTemplateColumns: "20% 30% 20% 30%" }}>

          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="AL NAJAH" className="h-14 xl:h-16 object-contain" />
          </div>

          {/* Search Input */}
          <div className="flex items-center">
            <SearchInput />
          </div>

          {/* Empty Column */}
          <div></div>

          {/* Contacts */}
          <div className="flex justify-end gap-8 text-gray-600 font-medium text-sm lg:text-base xl:text-lg whitespace-nowrap">
            <span className="flex items-center gap-2">
              <PhoneIcon fontSize="small" /> +971 6 7486990
            </span>
            <span className="flex items-center gap-2">
              <EmailIcon fontSize="small" /> alnajahpp@gmail.com
            </span>
          </div>

        </div>


        {/* MOBILE HEADER ROW */}
        <div className="lg:hidden flex items-center justify-between py-4 border-b">
          <img src={logo} alt="AL NAJAH" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-primary"
          >
            ☰
          </button>
        </div>

        {/* NAV ROW */}
        <nav className="w-full">
          <div className="hidden lg:flex justify-between items-center mt-2">

            {/* Dropdown Categories */}
            <div className="relative">
              <Dropdown />
            </div>

            {/* Desktop Menu */}
            <ul className="flex gap-10 text-lg xl:text-xl text-gray-700">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="relative group cursor-pointer"
                >
                  {/* Text */}
                  <span
                    className={`
          inline-block
          font-medium
          transition-all duration-300 ease-out
          group-hover:text-primary
          group-hover:scale-[1.06]
        `}
                    style={{
                      textShadow: "0 0 0.6px currentColor" // fake weight
                    }}
                  >
                    {item}
                  </span>

                  {/* Underline */}
                  <span
                    className="
          absolute left-0 -bottom-1
          h-[2px] w-0
          bg-primary
          transition-all duration-300 ease-out
          group-hover:w-full
        "
                  />
                </li>
              ))}
            </ul>

          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <ul className="lg:hidden w-full px-4 sm:px-6 py-4 space-y-4 bg-white border-t">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border rounded-full pl-5 pr-12 py-2 focus:ring-2 focus:ring-primary outline-none text-sm"
                />
                <SearchIcon
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                  fontSize="small"
                />
              </div>
              {menuItems.map(item => (
                <li key={item} className="border-b pb-2 text-sm">{item}</li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
