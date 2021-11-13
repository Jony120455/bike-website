import React from 'react';
import { Col } from 'react-bootstrap';
import { Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
  <Row>
    <Col className="text-light">
    <h2 className="text-center mt-3">About us</h2>
    <p>A new KTM is always exciting news, especially when it's an update for a bike that has changed very little in the past seven years. The first of the new-gen RCs to hit our market is the RC 200, and we got to spend some time with it at the Bajaj test track in Chakan. As before, most of the changes will feature on the entire RC range, including the new RC 390 that’s due early next year, so here’s what to expect.</p>
    </Col>
    <Col className="text-light">
    <h1 className="text-center mt-3" >Get in tuch</h1>
    <div className="text-center logo-icon p-3" >
    <a href=""> <img className="logo" src="https://cdn5.vectorstock.com/i/1000x1000/79/84/facebook-logo-icon-vector-29227984.jpg" alt="" /></a>

    <a href=""> <img className="logo" src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" alt="" /></a>

    <a href=""> <img className="logo" src="https://toppng.com/uploads/preview/ew-instagram-logo-transparent-related-keywords-logo-instagram-vector-2017-115629178687gobkrzwak.png" alt="" /></a>
    </div>
    </Col>
  </Row>
  <Row>
    <Col>
   
    <div>
    <h2 className="text-center text-light mt-3">LOGIN</h2>
        <div className="sub text-center">
        <input className="submit" type="text" placeholder="Your Name" />
        <input className="submit" type="text" placeholder="Your email" />   
        <button className="submit">Subscribe</button>
        </div>
    </div>
        </Col>
    <Col>
    <img className="img rounded mx-auto d-block" src="https://news.maxabout.com/wp-content/uploads/2019/04/KTM-Sales-Report-FY2018-19.jpg" alt="" />
    </Col>
    
  </Row>

        </div>
    );
};

export default Footer;