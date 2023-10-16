import { useEffect, useState } from "react";
const JobLists = () => {
  const [datas, setDatas] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (datas) {
        setDatas(datas);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const filtered = datas.filter((data) => {
      const toolsAndLanguages = [...data.languages, ...(data.tools || [])];
      return toolsAndLanguages.some((item) =>
        item.toLowerCase().includes(input)
      );
    });

    setFilteredJobs(filtered);
  };

  return (
    <div className="job-lists ">
      {/* <input
        type="text"
        placeholder="Search by tools or languages"
        value={searchInput}
        onChange={handleSearchInput}
      /> */}
      {datas.map((data) => (
        <div className="job-list  p-5 m-5 shadow-xl	 items-center  bg-white border-s-4 border-DarkGrayishCyan rounded-lg ">
          <div className="upper-items flex  mb-2 space-x-4">
            <span className="company font-bold text-DarkGrayishCyan">
              {data.company}
            </span>
            {data.new && (
              <span className="new border rounded-full text-white text-xs bg-DarkGrayishCyan p-1 font-bold">
                NEW!
              </span>
            )}
            {data.featured && (
              <span className="Featured border rounded-full text-white text-xs  bg-VeryDarkGrayishCyan p-1 font-bold">
                FEATURED
              </span>
            )}
          </div>
          <div className="flex space-x-2	items-center">
            <div className="logo">
              <img className="max-w-full max-h-full" src={data.logo} alt="" />
            </div>
            <div className="">
              <h1 className="text-lg font-bold text-VeryDarkGrayishCyan hover:text-DarkGrayishCyan cursor-pointer">
                {data.position}
              </h1>
            </div>
          </div>

          <div className="Lower flex mt-2 font-bold space-x-4 text-gray-600">
            <span className="postedAt">{data.postedAt}</span>
            <span className="contract">{data.contract}</span>
            <span className="location">{data.location}</span>
          </div>

          <div className="flex space-x-2 justify-end">
            {data.languages.map((lan) => (
              <p className="text-VeryDarkGrayishCyan bg-LightGrayishCyan font-bold text-sm rounded-lg p-1 ">
                {lan}
              </p>
            ))}
            {data.tools &&
              data.tools.map((tool) => (
                <p className="text-VeryDarkGrayishCyan flex space-x-2 bg-LightGrayishCyan font-bold text-sm rounded-lg p-1 ">
                  {tool}
                </p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobLists;
