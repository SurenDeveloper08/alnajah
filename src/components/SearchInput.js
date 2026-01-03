import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleClear = () => {
    setQuery("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border-2 border-[#00B4CC] text-gray-600 rounded-full py-1 px-4 focus:outline-none"
      />

      {/* Icon: Search if empty, Clear if has text */}
      {query ? (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <CloseIcon className='text-gray-600' fontSize="small" />
        </button>
      ) : (
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" fontSize="small" />
      )}
    </>
  );
};

export default SearchInput;
