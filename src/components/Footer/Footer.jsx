// import React from 'react';
// import img from '../../assets/logo/CareerHub.png'
import logo from '../../assets/icons/social.png'


const Footer = () => {
    return (
      <footer className="bg-black text-white mt-24 pt-20">
        <div className="grid grid-cols-5">
          <div className="pl-24">
            <h2 className="text-3xl mb-5">CareerHub</h2>
            <p className="text-gray-400 mb-5">
              There are many variations of passages of Lorem Ipsum. But the
              majority have suffered alteration in some form.
            </p>
            <img src={logo} alt="" />
          </div>
          <div className="pl-32">
            <h3 className="text-xl mb-10 font-medium">Company</h3>
            <p className="text-gray-400 mb-4">About Us</p>
            <p className="text-gray-400 mb-4">Work</p>
            <p className="text-gray-400 mb-4">Latest News</p>
            <p className="text-gray-400 mb-4">Careers</p>
          </div>
          <div className="pl-24">
            <h3 className="text-xl mb-10 font-medium">Product</h3>
            <p className="text-gray-400 mb-4">Prototype</p>
            <p className="text-gray-400 mb-4">Plans & Pricing</p>
            <p className="text-gray-400 mb-4">Customers</p>
            <p className="text-gray-400 mb-4">Integrations</p>
          </div>
          <div className="pl-24">
            <h3 className="text-xl mb-10 font-medium">Support</h3>
            <p className="text-gray-400 mb-4">Help Desk</p>
            <p className="text-gray-400 mb-4">Sales</p>
            <p className="text-gray-400 mb-4">Become a Partner</p>
            <p className="text-gray-400 mb-4">Developers</p>
          </div>
          <div className="pl-10">
            <h3 className="text-xl mb-10 font-medium">Contact</h3>
            <p className="text-gray-400 mb-4">524 Broadway, NYC</p>
            <p className="text-gray-400 mb-4">+1777-978-5570</p>
          </div>
        </div>
        <div className="border border-solid border-violet-500 my-12 mx-20"></div>
        <div className="flex px-20 items-center justify-between pb-20">
          <p>
            <small>©2024 CareerHub. All Rights Reserved</small>
          </p>
          <p>
            <small>
              Powered by <span>Ullash...</span>
            </small>
          </p>
        </div>
      </footer>
    );
};

export default Footer;