// import React from 'react';

// import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
    return (
      <nav className="grid grid-cols-3 py-4 sticky top-0 bg-white">
        <div className="flex items-center justify-center text-3xl font-semibold">
          <ActiveLink to="/">CareerHub</ActiveLink>
        </div>
        <div className="flex items-center justify-center font-semibold">
          <ActiveLink to="/statistics">Statistics</ActiveLink>
          <ActiveLink to="/applied_jobs">Applied Jobs</ActiveLink>
          <ActiveLink to="/blogs">Blogs</ActiveLink>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-violet-500 px-5 py-2 rounded-md text-white font-medium">Apply Now</button>
        </div>
      </nav>
    );
};

export default Navbar;