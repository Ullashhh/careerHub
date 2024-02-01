// import React from 'react';
// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobs from '../AppliedJobs/AppliedJobs';
import { useState } from 'react';
// import { getJobInfo } from '../../utilities/database';



const Jobs = () => {
    const savedJobs = useLoaderData()
    console.log(savedJobs)
    const [jobs, setJobs] = useState(savedJobs)
    const [onsite, setOnsite] = useState([])
    const [remote, setRemote] = useState([])
    const handleOnSite = () => {
      const onsiteJobs = savedJobs.filter((item) => item.remote_or_onsite == 'Onsite')
      setOnsite([...onsite, onsiteJobs])
      setJobs(onsiteJobs)
    }
    const handleRemote = () => {
      const remoteJobs = savedJobs.filter((item)=> item.remote_or_onsite == 'Remote')
      setRemote([...remote,  remoteJobs])
      setJobs(remoteJobs)
    }
    const handleAllJobs = () => {
      setJobs(savedJobs)
    }
    return (
      <div>
        <div className="mt-20 px-48 ml-[46rem]">
          <button onClick={handleOnSite} className="bg-violet-500 px-5 py-2 rounded-md text-white font-medium mr-2">
            Onsite
          </button>
          <button onClick={handleRemote} className="bg-violet-500 px-5 py-2 rounded-md text-white font-medium mr-2">
            Remote
          </button>
          <button onClick={handleAllJobs} className="bg-violet-500 px-5 py-2 rounded-md text-white font-medium">
            All Jobs
          </button>
        </div>
        <div>
          {jobs.map((item, index) => (
            <AppliedJobs key={index} item={item}></AppliedJobs>
          ))}
        </div>
      </div>
    );
};

export default Jobs;