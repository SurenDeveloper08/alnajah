import { useState } from "react";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Dropdown from "./Dropdown";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  const menuItems = ["HOME", "SERVICES", "ABOUT US", "GALLERY", "CONTACT US"];
  const categories = ["Category 1", "Category 2", "Category 3"];

  return (
    <header className="bg-white lg:shadow-sm sticky top-0 z-50">
      {/* DESKTOP HEADER ROW */}
      <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[auto_1fr_auto] items-center py-4 gap-6">

            {/* Logo */}
            <img src={logo} alt="AL NAJAH" className="h-10 object-contain" />

            {/* Search */}
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded-full pl-5 pr-12 py-2 ring-2 ring-primary outline-none placeholder:text-gray-400 placeholder:font-medium"
              />
              <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" fontSize="small" />
            </div>

            {/* Contact Info */}
            <div className="flex gap-6 text-sm text-gray-600 whitespace-nowrap font-medium">
              <span className="flex items-center gap-1 font-semibold">
                <PhoneIcon fontSize="small" /> +971 6 7486990
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <EmailIcon fontSize="small" /> alnajahpp@gmail.com
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* MOBILE HEADER ROW */}
      <div className="lg:hidden border-b flex items-center justify-between px-4 py-4">
        {/* Logo (Mobile left-aligned) */}
        <div className="flex items-center">
          <img src={logo} alt="AL NAJAH" className="w-8 h-8 md:w-9 md:h-9 object-contain" />
        </div>

        {/* Hamburger menu */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-primary">
          ☰
        </button>
      </div>

      {/* NAV ROW */}
      <nav className={`${menuOpen ? "border-t" : ""} lg:border-t`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Browse Categories */}
          <div className="hidden lg:block relative">
            <Dropdown />
            {/* <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="font-medium text-gray-700 flex items-center gap-1"
            >
              Browse Categories ▾
            </button>
            {categoryOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-md z-50">
                {categories.map(cat => (
                  <li key={cat} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{cat}</li>
                ))}
              </ul>
            )} */}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 text-sm text-gray-700">
            {menuItems.map(item => (
              <li key={item} className={`cursor-pointer hover:text-primary ${item === "HOME" ? "text-primary font-semibold" : ""}`}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4 bg-white border-t">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full border rounded-full pl-5 pr-12 py-2 focus:ring-2 focus:ring-primary outline-none"
              />
              <SearchIcon
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
                fontSize="small"
              />
            </div>
            {menuItems.map(item => (
              <li key={item} className="border-b pb-2">{item}</li>
            ))}
          </ul>
        )}
      </nav>

    </header>
  );
};

export default Header;
