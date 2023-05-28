import React from 'react';
import {FaFacebookSquare} from "react-icons/fa";
import {FaGithubSquare} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contacto</h3>
          <ul>
            <li><a href="mailto:contacto@example.com">contacto@example.com</a></li>
            <li><a href="tel:+1234567890">+1234567890</a></li>
            <li><a href="https://www.example.com/direccion">Dirección de ejemplo</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Derechos de autor</h3>
          <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
        </div>
        <div className="footer-section">
          <h3>Redes Sociales</h3>
          <ul className="social-links">
          <div className='container-card-icons'>
                <a href='' className='text-light'><FaFacebookSquare /></a>
                <a href='https://github.com/AndresBulacia/bulacia-williams-albarado-lazarte' className='text-light'><FaGithubSquare /></a>
                <a href='https://www.instagram.com/' className='text-light'><FaInstagramSquare /></a>
              </div>            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

