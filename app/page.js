"use client"

import Contact from "./components/contact";
import Customers from "./components/customers";
import Navbar from "./components/navbar";
import Team from "./components/team";

export default function Home() {
  return (
   <div className="container">
    <Navbar/>
    <Customers/>
    <Team/>
    <Contact/>

    <a href="#home" className="scroll-up-btn">
            <i className="fas fa-arrow-up"></i>
        </a>
   </div>
  );
}
