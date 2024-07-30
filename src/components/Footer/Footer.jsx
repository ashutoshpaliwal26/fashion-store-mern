import React from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pintrest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SF</p>
        </div>
        <ul className="footer-links">
            <li>COMPANY</li>
            <li>PRODUCT</li>
            <li>OFFICE</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={pintrest_icon} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>COPYRIGHT @ 2024 All Rights Are Reserved.</p>
        </div>
    </div>

  )
}

export default Footer