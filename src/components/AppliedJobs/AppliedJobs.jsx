// import React from 'react';

import { Link } from "react-router-dom";

const AppliedJobs = ({item}) => {
    return (
      <section>
        <div className="flex items-center py-5 px-20 mx-48 mt-1 border rounded-md">
          <div className="bg-slate-200 h-full rounded-md">
            <img className="px-5 py-12 w-48" src={item.logo} alt="" />
          </div>
          <div className="flex items-center justify-between grow">
            <div className="ml-24">
              <h3>{item.job_title}</h3>
              <p>{item.company_name}</p>
              <div>
                <p>{item.job_type}</p>
                <p>{item.remote_or_onsite}</p>
              </div>
              <div>
                <p>{item.location}</p>
                <p>{item.salary}</p>
              </div>
            </div>
            <Link to={`/details/${item.id}`}>
              <button className="bg-violet-500 px-5 py-2 rounded-md text-white font-medium">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </section>
    );
};

export default AppliedJobs;