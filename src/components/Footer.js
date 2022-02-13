import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className='footer'>
      <h3>Connect with me!</h3>
      <div class="d-flex justify-content-center">
      <a href='mailto:anuskatitli2001@gmail.com'><FontAwesomeIcon className='icons' icon={faEnvelope} /></a>
      <a href='https://github.com/Anuska2001'><FontAwesomeIcon className='icons' icon={faGithub} /></a>
      <a href='https://www.linkedin.com/in/anuska-sarkar-52242a190/'><FontAwesomeIcon className='icons' icon={faLinkedin} /></a>
      <a href='https://www.instagram.com/__anuskaaaa.__/'><FontAwesomeIcon className='icons' icon={faInstagram} /></a>
        
        
      </div>
    </div>
  )
}

export default Footer