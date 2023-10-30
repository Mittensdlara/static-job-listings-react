import React from "react";

const JobItem = ({ data, onItemClick }) => {
  return (
    <div className="job-item p-5 m-5 shadow-xl items-center bg-white border-s-4 border-DarkGrayishCyan rounded-lg">
      <div className="upper-items flex mb-2 space-x-4">
        <span className="company font-bold text-DarkGrayishCyan">{data.company}</span>
        {data.new && (
          <span className="new border rounded-full text-white text-xs bg-DarkGrayishCyan p-1 font-bold">
            NEW!
          </span>
        )}
        {data.featured && (
          <span className="Featured border rounded-full text-white text-xs bg-VeryDarkGrayishCyan p-1 font-bold">
            FEATURED
          </span>
        )}
      </div>
      <div className="flex space-x-2 items-center">
        <div className="logo w-12 h-12 sm:w-16 sm:h-16">
          <img className="w-full h-full object-contain" src={data.logo} alt="" />
        </div>
        <div className="">
          <h1 className="text-lg sm:text-xl font-bold text-VeryDarkGrayishCyan cursor-pointer hover:text-DarkGrayishCyan">
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
          <p
            key={lan}
            className={`cursor-pointer text-VeryDarkGrayishCyan bg-LightGrayishCyan font-bold text-sm rounded-lg p-1`}
            onClick={() => onItemClick(lan)}
          >
            {lan}
          </p>
        ))}
        {data.tools.map((tool) => (
          <p
            key={tool}
            className={`cursor-pointer text-VeryDarkGrayishCyan flex space-x-2 bg-LightGrayishCyan font-bold text-sm rounded-lg p-1`}
            onClick={() => onItemClick(tool)}
          >
            {tool}
          </p>
        ))}
      </div>
    </div>
  );
};

export default JobItem;
