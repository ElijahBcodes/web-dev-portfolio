import React from 'react'
// import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Home.css"
import Pic10 from "../assets/portrait.png"

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hello, my name is Elijah</h2>
        <div className='p-container'>
        <img className='portrait' alt='portrait' src={Pic10}/>
        </div>
        <div className='prompt'>
          <br></br>
          <br></br>
          <p>
            A web developer with a zeal for for technology and learning.
          </p>
          <LinkedInIcon/>
          <EmailIcon/>
          <GithubIcon/>
        </div>
        </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
            <li className='item'>
              <h2>Front-End </h2>
              <span>HTML, CSS, React, Yarn </span>
            </li>
            <li className='item'>
              <h2>Back-End </h2>
              <span>PostgreSQL, Rails,Jest, NodeJs, NPM, Postman</span>
           </li>
           <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Ruby, Python</span>
           </li>
          </ol>
      </div>
    </div>

  )
}

export default Home