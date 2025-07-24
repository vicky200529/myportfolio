import React, { useState } from "react";
import "./App.css";
import pp from './assets/pp.png'
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

function App() {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage((prev) => Math.min(prev + 1, 2));
  const prevPage = () => setPage((prev) => Math.max(prev - 1, 1));
  const nextPage_2 = () => setPage((prev) => Math.min(prev + 1, 3));

  return (
    <div className="book">
      <div className={`page ${page === 1 ? "active" : ""}`}>
        <div className="content">
          <img src={pp} alt="Profile" className="profile-pic" />
          <h1>
            Hi, I'm Rajdeep Nayek

          </h1>
          <p>
            I'm a B.Tech student at JIS University, specializing in Cybersecurity. I'm a MERN stack developer with knowledge in Node.js, MongoDB, C++, C,ASM, JavaScript, HTML, and CSS.
          </p>
          <p>
            My hobbies include painting, playing karate, and exploring new technologies.
          </p>
          <div className="social-icons">
            <a href="https://github.com/vicky200529" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/_vicky905/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="www.linkedin.com/in/rajdeep-nayek-a492b3274" target="" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/rajdeep.nayek.58/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          </div>
          <button onClick={nextPage}>Next</button>
        </div>
      </div>


      <div className={`page ${page === 2 ? "active" : ""}`}>
        <div className="content">
          <h1>My Skills</h1>
          <div className="skills">
            {[
              "Node.js",
              "MongoDB",
              "C++",
              "C",
              "JavaScript",
              "HTML",
              "CSS",
              "React.js",
              "Express.js","ASM"
            ].map((skill) => (

              <span key={skill} className="skill">
                {skill}
              </span>

            ))}
          </div>
        <h1>MY HOBBIES</h1>
        <div className="hobbies">
            {[
               "Guitar",
               "Chess", "Cooking", "Drawing", 
               "Gym","Karate", "Cycling",
            ].map((skill) => (

              <span key={skill} className="skill">
                {skill}
              </span>
              

            ))}
             <button onClick={prevPage}>PREVIOUS</button>
          </div>

        </div>
        
      </div>

    </div>
  );
}

export default App;