// import React from 'react';

import { useEffect, useState } from "react";
import JobInfo from "../JobInfo/JobInfo";
// import { Link } from "react-router-dom";

const FeatureJobs = () => {
    const [allJobs, setAllJobs] = useState([])
    useEffect(() => {
        fetch("http://localhost:4000/allJobs")
          .then((res) => res.json())
          .then((data) => setAllJobs(data));
    }, []);
    const [jobs, setJobs] = useState([])
    useEffect(() => {
      fetch("http://localhost:4000/allJobs?_limit=4")
        .then((res) => res.json())
        .then((data) => setJobs(data));
    }, []);
    const seeAllJobs = () => {
        setJobs(allJobs)
    }
    return (
      <div className="mt-32">
        <h1 className="text-5xl font-medium">Featured Jobs</h1>
        <p className="mt-5 text-gray-500">
          Explore thousands of job opportunities with all the information you
          need. Its your future.
        </p>
        <div className="grid grid-cols-2 gap-10 px-32 mt-24">
          {jobs.map((item) => (
            <JobInfo key={item.id} item={item}></JobInfo>
          ))}
        </div>
          <button
            onClick={seeAllJobs}
            className="mt-10 bg-violet-500 px-5 py-2 rounded-md text-white font-medium"
          >
            See All Jobs
          </button>
      </div>
    );
};

export default FeatureJobs;