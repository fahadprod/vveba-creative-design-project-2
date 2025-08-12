'use client';

import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';

function getStars(rating) {
 const stars = [];
 const fullStars = Math.floor(rating);
 const hasHalf = rating % 1 !== 0;

 for (let i = 0; i < fullStars; i++) {
  stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
 }

 if (hasHalf) {
  stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
 }

 while (stars.length < 5) {
  stars.push(<i key={`empty-${stars.length}`} className="far fa-star"></i>);
 }

 return stars;
}

export default function Customers() {
 const [users, setUsers] = useState([]);
 const [currentPage, setCurrentPage] = useState(1);
 const [loading, setLoading] = useState(true);
 const resultsPerPage = 3;

 useEffect(() => {
  const fetchUsers = async () => {
   try {
    setLoading(true);
    const response = await fetch(
     `https://randomuser.me/api/?results=15&seed=nextjs`
    );
    const data = await response.json();
    setUsers(data.results);
   } catch (error) {
    console.error('Error fetching users:', error);
   } finally {
    setLoading(false);
   }
  };

  fetchUsers();
 }, []);

 // Pagination calculation
 const totalPages = Math.ceil(users.length / resultsPerPage);
 const startIndex = (currentPage - 1) * resultsPerPage;
 const currentUsers = users.slice(startIndex, startIndex + resultsPerPage);

 const handlePrevPage = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
 };

 const handleNextPage = () => {
  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
 };

 if (loading) {
  return (
   <section className="section-2" id="customers">
    <h1 className="section-heading">Customers</h1>
    <div className="loading">Loading...</div>
   </section>
  );
 }

 return (
  <section className="section-2" id="customers">
   <h1 className="section-heading">Customers</h1>

   <div className="customers-wrapper">
    {currentUsers.map((user, index) => (
     <motion.div
      className="customer"
      key={user.login.uuid}
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: index * 0.2}}
      viewport={{once: true}}
     >
      <i className="fas fa-quote-left"></i>
      <p className="customer-text">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora totam
       voluptatum accusantium pariatur, nulla quasi quibusdam ipsa quisquam
       repellat atque, tempore assumenda vitae. Earum fuga a accusamus, nisi
       ullam delectus!
      </p>
      <div className="customer-rating">{getStars(4 + Math.random())}</div>
      <img
       src={user.picture.large}
       className="customer-img"
       alt={`${user.name.first} ${user.name.last}`}
      />
      <h4 className="customer-name">
       {user.name.first} {user.name.last}
      </h4>
     </motion.div>
    ))}
   </div>

   {/* Pagination */}
   <motion.div
    className="pagination"
    initial={{opacity: 0, y: 20}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}
   >
    <button onClick={handlePrevPage} disabled={currentPage === 1}>
     Previous
    </button>
    <span>
     Page {currentPage} of {totalPages}
    </span>
    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
     Next
    </button>
   </motion.div>
  </section>
 );
}
