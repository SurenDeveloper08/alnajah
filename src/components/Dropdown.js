import React, {useState} from 'react';
import { ArrowDropDown } from '@mui/icons-material'; // Import MUI icon

const Dropdown = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const categories = ["Category 1", "Category 2", "Category 3"]; // Example categories
  
  const handleCategoryClick = () => {
    setCategoryOpen(false);
  };

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setCategoryOpen(!categoryOpen)}
        className="font-medium text-white bg-[#25b6c6] hover:bg-[#1a9e99] focus:outline-none focus:ring-2 focus:ring-[#1a9e99] focus:ring-opacity-50 px-4 py-2 flex items-center gap-2 transition-colors duration-300 ease-in-out"
      >
        Browse Categories
        <ArrowDropDown className="w-5 h-5" /> {/* MUI icon for dropdown */}
      </button>

      {/* Dropdown */}
      {categoryOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50">
          {categories.map(cat => (
            <li
              key={cat}
              onClick={() => handleCategoryClick(cat)} // Close dropdown on click
              className="px-4 py-2 text-gray-800 hover:bg-[#e0f5f5] hover:text-[#1a9e99] cursor-pointer transition-colors duration-200 ease-in-out"
            >
              {cat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

