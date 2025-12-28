<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
    {/* Browse Categories */}
    <div className="hidden lg:block relative">
      <button
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
      )}
    </div>

    {/* Desktop Menu */}
    <ul className="hidden lg:flex gap-6 text-sm text-gray-700">
      {menuItems.map(item => (
        <li key={item} className={`cursor-pointer hover:text-primary ${item === "HOME" ? "text-primary font-semibold" : ""}`}>{item}</li>
      ))}
    </ul>
  </div>