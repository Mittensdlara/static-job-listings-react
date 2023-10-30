import React from "react";

const FilterBar = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <div className="filter-bar flex items-center sm:space-x-2">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`cursor-pointer text-VeryDarkGrayishCyan bg-LightGrayishCyan font-bold text-sm rounded-full px-4 py-2 m-1 transition duration-300 ${
            filter === selectedFilter
              ? "bg-DarkGrayishCyan text-white hover:bg-DarkerGrayishCyan"
              : "hover:bg-DarkGrayishCyan hover:text-white"
          }`}
          onClick={() => onFilterChange(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
