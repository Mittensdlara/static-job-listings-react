import React, { useEffect, useState } from "react";
import JobItem from "./JobItem";

const JobLists = () => {
  const [datas, setDatas] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  const handleFilterChange = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  const filteredJobs = selectedFilters.length
    ? datas.filter(
        (data) =>
          data.languages.some((language) => selectedFilters.includes(language)) ||
          data.tools.some((tool) => selectedFilters.includes(tool))
      )
    : datas;

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8">
      <div className="filter-bar flex flex-wrap items-center mb-6">
        {selectedFilters.map((filter) => (
          <button
            key={filter}
            className="filter-button bg-VeryDarkGrayishCyan text-white rounded-full px-2 py-1 m-1"
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
        {selectedFilters.length > 0 && (
          <button
            className="clear-filter-button bg-DarkGrayishCyan text-white rounded-full px-4 py-2 ml-auto"
            onClick={clearFilters}
          >
            Clear Filter
          </button>
        )}
      </div>
      <div className="job-lists grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.map((data) => (
          <JobItem key={data.id} data={data} onItemClick={handleFilterChange} />
        ))}
      </div>
    </div>
  );
};

export default JobLists;
