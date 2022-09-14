import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/>
        <TwitterIcon/>
        <LinkedInIcon/>
        <GithubIcon onClick/>
      </div>
      <p> &copy;2022 Elijah </p>
      
      
      </div>
  )
}

export default Footer