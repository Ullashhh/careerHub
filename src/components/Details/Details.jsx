// import React from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom'
import { FaArrowLeftLong } from "react-icons/fa6";
import { addToDb } from '../../utilities/database';



const Details = () => {
  const navigate = useNavigate()
    const jobDetails = useLoaderData()
    const goBack = () => {
      navigate(-1)
    }
    const {
      company_name,
      contact_information,
      educational_requirements,
      experiences,
      job_description,
      job_responsibility,
      job_title,
      job_type,
      location,
      remote_or_onsite,
      salary,
      logo,
    } = jobDetails;
    return (
      <section className="px-36">
        <div className="flex mt-20">
          <div className="w-4/6 pr-36">
            <p className="text-xl mb-5">
              <strong>Company: </strong>
              {company_name}
            </p>
            <p className="mb-5">
              <strong>Job Type: </strong>
              {job_type} & {remote_or_onsite}
            </p>
            <p className="mb-5">
              <strong>Location: </strong>
              {location}
            </p>
            <p className="mb-5">
              <strong>Job Description: </strong>
              {job_description}
            </p>
            <p className="mb-5">
              <strong>job Responsibility: </strong>
              {job_responsibility}
            </p>
            <p className="mb-5">
              <strong>Educational Requirements:</strong>{" "}
              {educational_requirements}
            </p>
            <p className="mb-5">
              <strong>Experiences: </strong>
              {experiences}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-xl font-medium mb-5">Job Details</p>
              <img src={logo} alt="" />
            </div>
            <hr />
            <div>
              <p className="mt-5">
                <strong>Salary: </strong>
                {salary} (Per Month)
              </p>
              <p className="mt-3">
                <strong>Job Title: </strong>
                {job_title}
              </p>
            </div>
            <p className="text-xl font-medium mt-5 mb-3">Contact Information</p>
            <hr />
            <div className="mt-5">
              <p>
                <strong>Phone: </strong>
                {contact_information.phone}
              </p>
              <p className="mt-3">
                <strong>Email: </strong>
                {contact_information.email}
              </p>
              <p className="mt-3">
                <strong>Address: </strong>
                {contact_information.address}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={goBack}
                className="mt-10 bg-violet-500 px-5 py-2 rounded-md text-white font-medium"
              >
                <FaArrowLeftLong />
              </button>
              <button onClick={() => addToDb(job_title)} className="mt-10 bg-violet-500 px-5 py-2 rounded-md text-white font-medium">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Details;