import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border rounded-full pl-6 pr-10 py-3 ring-1 ring-primary outline-none placeholder:text-gray-400 placeholder:font-medium text-base lg:text-lg"
      />

      {/* Icon: Search if empty, Clear if has text */}
      {query ? (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <CloseIcon fontSize="small" />
        </button>
      ) : (
        <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fontSize="small" />
      )}
    </div>
  );
};

export default SearchInput;
