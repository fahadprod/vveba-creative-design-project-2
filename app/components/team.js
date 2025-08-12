'use client';

import {useEffect} from 'react';
import {motion} from 'framer-motion';

const teamMembers = [
 {
  name: 'Nick Smith',
  role: 'Designer',
  image: 'images/team-member-1.jpg',
  skills: ['Ps', 'Figma', 'HTML5', 'CSS3', 'Ai'],
  about:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?',
 },
 {
  name: 'Bob Brown',
  role: 'Designer',
  image: 'images/team-member-2.jpg',
  skills: ['Ae', 'Pr', 'HTML5', 'CSS3', 'Inkscape'],
  about:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?',
 },
 {
  name: 'John Doe',
  role: 'Developer',
  image: 'images/team-member-3.jpg',
  skills: ['JavaScript', 'ReactJS', 'NodeJS', 'MongoDB', 'Python'],
  about:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati blanditiis aspernatur ab doloribus optio nesciunt adipisci fugiat quia veritatis doloremque tempore ipsum sunt atque exercitationem perspiciatis, beatae aliquam voluptates perferendis. Doloribus exercitationem adipisci, quidem veritatis temporibus magni. Sunt, exercitationem?',
 },
];

export default function Team() {
 useEffect(() => {
  const buttons = document.querySelectorAll('.story-btn');
  buttons.forEach((btn) => {
   const handleClick = () => {
    btn.classList.toggle('change');
    const story = btn.nextElementSibling;
    if (story) {
     story.classList.toggle('change');
    }
   };

   btn.addEventListener('click', handleClick);

   return () => {
    btn.removeEventListener('click', handleClick);
   };
  });
 }, []);

 return (
  <section className="section-3" id="team">
   <h1 className="section-heading">Team</h1>

   <div className="team-wrapper">
    {teamMembers.map((member, index) => (
     <motion.div
      className="team-member"
      key={index}
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.6, delay: index * 0.2}}
      viewport={{once: true}}
     >
      <img src={member.image} className="team-member-img" alt={member.name} />
      <h2 className="team-member-name">
       {member.name} <span>({member.role})</span>
      </h2>
      <ul className="team-member-skills">
       {member.skills.map((skill, i) => (
        <li key={i}>{skill}</li>
       ))}
      </ul>
      <a href="#" className="projects-btn">
       Projects
      </a>
      <div className="story-btn" title="My Story">
       <div className="story-btn-line"></div>
      </div>
      <div className="story">
       <h4 className="story-heading">About Me</h4>
       <p className="story-paragraph">{member.about}</p>
      </div>
     </motion.div>
    ))}
   </div>
  </section>
 );
}
