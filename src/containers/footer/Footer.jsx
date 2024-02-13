import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into the future before others?</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo'/>
          <p>Nairobi, Kenya. All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Nairobi, Kenya</p>
          <p>+254721 475 892</p>
          <p>info@openai.co.ke</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer