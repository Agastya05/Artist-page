import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="footer-logo-mark">Z</span>
            <span className="footer-logo-text">Zigguratts</span>
          </div>
          <p className="footer-tagline">
            Discover original artwork from talented artists worldwide.
          </p>
        </div>

        <div className="footer-section">
          <h4>For Buyers</h4>
          <ul>
            <li>
              <a href="https://zigguratss.com/artworks">Browse Artworks</a>
            </li>
            <li>
              <a href="https://zigguratss.com/cms/customer-guide">
                Customer Guide
              </a>
            </li>
            <li>
              <a href="https://zigguratss.com/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>For Artists</h4>
          <ul>
            <li>
              <a href="https://zigguratss.com/cms/artist-guide">Artist Guide</a>
            </li>
            <li>
              <a href="https://zigguratss.com/contest/artwork/week">Contests</a>
            </li>
            <li>
              <a href="https://zigguratss.com/signup">Join Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="https://zigguratss.com/about">About Us</a>
            </li>
            <li>
              <a href="https://zigguratss.com/blog">Blog</a>
            </li>
            <li>
              <a href="https://zigguratss.com/cms/terms-and-conditions">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="https://zigguratss.com/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a
              href="https://www.facebook.com/people/Zigguratss-Artwork-LLP/100090657829166/"
              className="social-link"
              title="Facebook"
            >
              f
            </a>
            <a
              href="https://www.instagram.com/zigguratss/"
              className="social-link"
              title="Instagram"
            >
              📷
            </a>
            <a
              href="https://www.linkedin.com/company/zigguratssartwork/"
              className="social-link"
              title="LinkedIn"
            >
              in
            </a>
            <a
              href="https://in.pinterest.com/zigguratss/"
              className="social-link"
              title="Pinterest"
            >
              P
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Zigguratss Artwork LLP. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
