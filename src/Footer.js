import React from "react";
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
      <div className="container">
      <div className="row  justify-content-center">
        <div className="col-12 md-4 col-sm-3">
        <h7 className="text-uppercase  font-weight-bold">Get to Know Us</h7>
              <ul className="list-unstyled">
              <li>  <a href="#!">About Us</a></li>
              <li>  <a href="#!">Careers</a></li>
              <li><a href="#!">Press Releases</a></li>
              <li><a href="#!">Piwiqu Cares</a></li>


              </ul>
               
        </div>
        <div className="col-12 md-4 col-sm-3">
        <h7 className="text-uppercase  font-weight-bold">connect with us</h7>
        <ul className="list-unstyled">
              <li>  <a href="#!">Facebook</a></li>
              <li>  <a href="#!">Twitter</a></li>
              <li><a href="#!">Instagram</a></li>
              <li><a href="#!">Linkedin</a></li>
              </ul>
             
        </div>
        <div className="col-12 md-4 col-sm-3">
        <h7 className="text-uppercase font-weight-bold">
                make money with us
              </h7>
              <ul className="list-unstyled">
              <li>  <a href="#!">Sell on piwiqu</a></li>
              <li>  <a href="#!">Become an affiliated</a></li>
              <li><a href="#!">Fullfilment by Piwiqu</a></li>
              <li><a href="#!">Advertise your products</a></li>
              </ul>
              
        </div>
        <div className="col-12 md-4 col-sm-3">
        <h7 className="text-uppercase mb-4 font-weight-bold">let us help you</h7>
              <ul className="list-unstyled">
              <li>  <a href="#!">Your Account</a></li>
              <li>  <a href="#!">Returns Centre</a></li>
              <li><a href="#!">100% Purchase Protection</a></li>
              <li><a href="#!">Piwiqu App Download</a></li>
              </ul>
        </div>
      </div>
      <div className="row  justify-content-center">
        <div className="col-12 col-sm-4 align-self-center">
        <div className="text-center">
          <a class="btn btn-social-icon btn-facebook">
          <span class="fa fa-facebook"></span>
          </a>
          <a class="btn btn-social-icon btn-google">
          <span class="fa fa-google"></span>
          </a>
          <a class="btn btn-social-icon btn-instagram">
          <span class="fa fa-instagram"></span>
          </a>
          <a class="btn btn-social-icon btn-yahoo">
          <span class="fa fa-yahoo"></span>
          </a>
          <a class="btn btn-social-icon btn-twitter">
          <span class="fa fa-twitter"></span>
          </a>
        </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Footer;