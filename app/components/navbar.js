'use client';

import {useEffect, useState} from 'react';

export default function Navbar() {
 const texts = ['Creative Design', 'Modern UI/UX', 'Responsive Layouts'];
 const [displayedText, setDisplayedText] = useState('');
 const [textIndex, setTextIndex] = useState(0);
 const [isDeleting, setIsDeleting] = useState(false);

 useEffect(() => {
  const currentText = texts[textIndex];
  let speed = isDeleting ? 50 : 100; // typing / deleting speed

  if (!isDeleting && displayedText === currentText) {
   // Pause before deleting
   speed = 1000;
   setTimeout(() => setIsDeleting(true), 1000);
   return;
  }

  if (isDeleting && displayedText === '') {
   // Move to next text
   setIsDeleting(false);
   setTextIndex((prev) => (prev + 1) % texts.length);
  }

  const timer = setTimeout(() => {
   setDisplayedText((prev) =>
    isDeleting
     ? currentText.slice(0, prev.length - 1)
     : currentText.slice(0, prev.length + 1)
   );
  }, speed);

  return () => clearTimeout(timer);
 }, [displayedText, isDeleting, textIndex]);

 // Navbar scroll effect
 useEffect(() => {
  const handleScroll = () => {
   const navbar = document.querySelector('.navbar');
   const navLinks = document.querySelectorAll('.navbar-link');

   if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
    navLinks.forEach((link) => link.classList.add('scrolled'));
   } else {
    navbar.classList.remove('scrolled');
    navLinks.forEach((link) => link.classList.remove('scrolled'));
   }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 return (
  <section className="section-1" id="home">
   <nav className="navbar">
    <a href="#home" className="navbar-link">
     Design
    </a>
    <a href="#customers" className="navbar-link">
     Customers
    </a>
    <a href="#team" className="navbar-link">
     Team
    </a>
    <a href="#contact" className="navbar-link">
     Contact
    </a>
   </nav>
   <div className="floating-bg"></div>

   <h1
    className="section-1-heading"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5}}
   >
    {displayedText}
    <span className="blinking-cursor">|</span>
   </h1>

   <div className="logo">
    <i className="fas fa-bezier-curve"></i>
   </div>
  </section>
 );
}