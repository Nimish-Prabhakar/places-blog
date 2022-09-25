import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { BsInstagram, BsTwitter, BsFacebook, BsWhatsapp } from 'react-icons/bs';
import './Footer.css';

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerWrapper">
          <img className="footerLogo" src={logo} alt="logo" />
          <div className="footerTabs">
            <p
              className="footerTab"
              style={{ fontSize: '25px', fontWeight: 'bold' }}
            >
              Meals
            </p>
            <Link className="footerTab" to="/asia">
              Asia
            </Link>
            <Link className="footerTab" to="/north-america">
              North America
            </Link>
            <Link className="footerTab" to="/africa">
              Africa
            </Link>
            <Link className="footerTab" to="/south-america">
              South America
            </Link>
            <Link className="footerTab" to="/europe">
              Europe
            </Link>
          </div>
          <div className="footerTabs">
            <p
              className="footerTab"
              style={{ fontSize: '25px', fontWeight: 'bold' }}
            >
              Quick Links
            </p>
            <Link className="footerTab" to="/">
              Home
            </Link>
            <Link className="footerTab" to="/about">
              About Us
            </Link>
            <Link className="footerTab" to="/contact">
              Contact
            </Link>
            <Link className="footerTab" to="/privacy-policy">
              privacy-policy
            </Link>
            <Link className="footerTab" to="/terms-conditions">
              Terms And Conditions
            </Link>
          </div>
          <div className="vr"></div>
          <div className="iconFlex" style={{ margin: 0 }}>
            <BsInstagram
              onClick={() =>
                window.open(
                  'https://www.instagram.com/numberonemeals/',
                  '_blank'
                )
              }
              style={{ color: 'white' }}
              className="socialIcons"
            />
            <BsTwitter
              onClick={() =>
                window.open('https://mobile.twitter.com/top100food', '_blank')
              }
              style={{ color: 'white' }}
              className="socialIcons"
            />
            <BsWhatsapp
              onClick={() => window.open('https://www.whatsapp.com/', '_blank')}
              style={{ color: 'white' }}
              className="socialIcons"
            />
            <BsFacebook
              onClick={() =>
                window.open(
                  'https://www.facebook.com/profile.php?id=100085885082369',
                  '_blank'
                )
              }
              style={{ color: 'white' }}
              className="socialIcons"
            />
          </div>
        </div>
        <p style={{ color: 'white', alignSelf: 'center' }}>
          © Copyright 2022. Designed and Developed
        </p>
      </div>
    </>
  );
}

export default Footer;
