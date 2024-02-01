// import React from 'react';

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {Outlet} from "react-router-dom"

const Header = () => {
    return (
        <main>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Header;