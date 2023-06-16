import React from 'react';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
// import { Nav } from './Nav';


export const Footer = () => {
  return (
    <footer className="footer bg-transparent text-light">
      <div className="r">
        <div className="row">
          <div className="col-md-4">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#about">About</a></li>
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li><a href="#faq">FAQ</a></li>
              {/* <li><a href="#terms">Terms of Service</a></li> */}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              {/* <li className="list-inline-item"><a href="#">hi<i className="fab fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li> */}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="mb-0">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

  
  