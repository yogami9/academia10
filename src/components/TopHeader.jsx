import React from 'react';
import logo from './assets/icons/logo.png'; // Adjust the path based on your structure
import whatsappIcon from './assets/icons/whatsapp.png';
import tiktokIcon from './assets/icons/tiktok.png';
import twitterIcon from './assets/icons/twitter.png';
import facebookIcon from './assets/icons/facebook.png';
import instagramIcon from './assets/icons/instagram.png';
import linkedinIcon from './assets/icons/linkedin.png';
import youtubeIcon from './assets/icons/youtube.png';
import './TopHeader.css'; // Link the stylesheet

const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="top-header-container">
        <img src={logo} alt="Logo" className="top-header-logo" />
        <div className="top-header-contact-info">
          <a href="mailto:eduacers1@gmail.com" className="top-header-email">eduacers1@gmail.com</a>
          <a href="tel:+447878497830" className="top-header-phone">+44 7878 497830</a>
        </div>
        <div className="top-header-social-icons">
          <a href="https://wa.me/+447878497830" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <img src={tiktokIcon} alt="TikTok" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src={twitterIcon} alt="Twitter" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src={youtubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;