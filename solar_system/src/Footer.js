import "./Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

export const Footer = () => {

  return (
    <footer className="footer">
        <div className="box1">

            <div className="col-md-4">
                <h5>Company</h5>
             <ul className="list-unstyled">
                <li>
                    <a href="#contact">About Us</a>
                </li>
             </ul>
            </ div>
        </div>

        <div className="box2">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

        <div className="box3">
            <h5>Follow Us</h5>
            <ul className="list-inline">
                <li className="list-inline-item">
                        <a href="https://www.facebook.com">
                    <i className="fab fa-facebook-f"></i>
                        </a>
                </li>
                <li className="list-inline-item">
                        <a href="https://www.twitter.com">
                            <i className="fab fa-twitter"></i>
                        </a>
                </li>
                <li className="list-inline-item">
                        <a href="https://www.instagram.com">
                            <i className="fab fa-instagram"></i>
                        </a>
                </li>
            </ul>
        </div>
    
       
        <div className="date-row">
            <p className="mb-0">
              © {new Date().getFullYear()} Script Guardians. All rights
              reserved.
            </p>
        </div>

    </footer>
  );
};
