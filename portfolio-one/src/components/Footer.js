import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href="https://www.linkedin.com/in/elijah-barreto/" >
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/eli1inthesnow">
          <TwitterIcon />
        </a>
        <a href="https://github.com/ElijahBcodes" >
          <GithubIcon />
        </a>
      </div>
      <a className="arrow" href="#top">
        <ArrowUpward />
      </a>

    </div>
  )
}

export default Footer