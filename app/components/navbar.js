"use client"

// import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Navbar() {

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const navLinks = document.querySelectorAll('.navbar-link');
            
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navLinks.forEach(link => {
                    link.classList.add('scrolled');
                });
            } else {
                navbar.classList.remove('scrolled');
                navLinks.forEach(link => {
                    link.classList.remove('scrolled');
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <section className="section-1" id="home">
            <nav className="navbar">
                <a href="#home" className="navbar-link">Design</a>
                <a href="#customers" className="navbar-link">Customers</a>
                <a href="#team" className="navbar-link">Team</a>
                <a href="#contact" className="navbar-link">Contact</a>
            </nav>
            <div className="floating-bg"></div>
            <h1 className="section-1-heading">Creative Design</h1>
            <div className="logo">
                <i className="fas fa-bezier-curve"></i>
            </div>
        </section>
    )
}