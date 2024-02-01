// import React from 'react';
import user from "../../assets/images/user.png";
import Category from "../Category/Category";
// import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <main>
      <div className="grid grid-cols-2 mt-8 gap-5 px-16">
        <div className="mx-16 mt-20">
          <h1 className="text-6xl font-medium leading-tight">
            One Step Closer <br />
            To Your <br /> <span className="text-violet-500">Dream Job</span>
          </h1>
          <p className="my-8 text-gray-500 leading-relaxed">
            Explore Thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish. This is the best opportunities to make sure of getting your dream job. Apply now.
          </p>
          <button className="bg-violet-500 px-5 py-2 rounded-md text-white font-medium">
            Get Started
          </button>
        </div>
        <div>
          <img src={user} alt="" className="h-[627px]" />
        </div>
      </div>
      <div>
        <Category></Category>
      </div>
    </main>
  );
};

export default Home;
