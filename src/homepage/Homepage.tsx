import React from 'react';
import logoImage from "../assets/logo.png";

// Define props interface for the Navbar component
interface NavbarProps {
  logo: string;
}

// Navbar component
const Navbar: React.FC<NavbarProps> = ({ logo }) => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">ContactUs</a></li>
        <li><a href="#about">AboutUs</a></li>
      </ul>
    </nav>
  );
};

// Footer component
const Footer: React.FC = () => {
  // Replace this with your footer logo image URL
  const footerLogoUrl = logoImage;

  return (
    <footer>
      <div className="footer-logo">
        <img src={footerLogoUrl} alt="Footer Logo" />
      </div>
      <div className="address">
        <p>123 Street Name, City</p>
        <p>Country, Postal Code</p>
      </div>
      <div className="social-media">
        {/* Add your social media links/icons here */}
        <a href="your_social_media_link"><i className="fab fa-facebook"></i></a>
        <a href="your_social_media_link"><i className="fab fa-twitter"></i></a>
        <a href="your_social_media_link"><i className="fab fa-instagram"></i></a>
      </div>
      <div className="phone-number">
        <p>Phone: +1234567890</p>
      </div>
    </footer>
  );
};

// Home page component
const HomePage: React.FC = () => {
  // Replace this with your main logo image URL
  const logoUrl = logoImage;

  return (
    <div>
      {/* Render Navbar with logo */}
      <Navbar logo={logoUrl} />

      {/* Main content */}
      <div className="content">
        <h2>Welcome to Parlour To You</h2>
        <p>Explore our services and learn more about us.</p>
        <button id='explore-btn'>Explore Services</button>
      </div>

      {/* Render Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
