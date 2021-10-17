import React from 'react';
import './assets/Footer.css';

const footer = () => {
  return(
    <footer className="footer">
      <div className="footer__images">
        <img className="footer__logo" src="assets/images/logo.svg" alt="Logotipo" />
        <ul className="footer__icons">
          <li>
            <a href="#">
              <img src="assets/images/icon-facebook.svg" alt="Icofacebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/icon-youtube.svg" alt="Icon youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/icon-twitter.svg" alt="Icon twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/icon-pinterest.svg" alt="Icon pinterest" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/images/icon-instagram.svg" alt="Icon inatagram" />
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer__links footer__links--left">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
      </ul>
      <ul className="footer__links footer__links--right">
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <div className="footer__lastDiv">
        <a className="btn footer__btn" href="#">Request Invite</a>
        <small className="footer__copyright">© Easybank. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer;