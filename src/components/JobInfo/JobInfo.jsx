// import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const JobInfo = ({item}) => {
    
    
    return (
      <div className="p-20  mx-auto bg-slate-100 rounded-md text-left">
        <img src={item.logo} alt="" className="mx-auto mb-5" />
        <h2 className="text-gray-500 text-xl mb-3">{item.job_title}</h2>
        <h2 className="text-gray-500 mb-3">{item.company_name}</h2>
        <div className="flex ">
          <p className="border px-2 py-1 font-medium text-violet-500">
            {item.remote_or_onsite}
          </p>
          <p className="border px-2 py-1 ml-3 font-medium text-violet-500">
            {item.job_type}
          </p>
        </div>
        <div className="flex mt-3">
          <p className="mr-1 text-gray-500 flex items-center justify-center">
            <CiLocationOn className="mr-1" />
            {item.location}
          </p>
          <p className="text-gray-500 flex items-center justify-center">
            <CiDollar className="mr-1" />
            Salary: {item.salary}
          </p>
        </div>
        <Link to={`/details/${item.id}`}>
          <button className="mt-8 bg-violet-500 px-5 py-2 rounded-md text-white font-medium">
            View Details
          </button>
        </Link>
      </div>
    );
};

export default JobInfo;