import React from 'react';
import './Footer.css';
import Cal from '../img/Cal.png';
import Line from '../img/line.png';
import StokeLogo from '../img/logo.png'

const Footer = () => {
    return (
        <div className="lastSectionBackground">
          <div className="container d-flex">
          <div className="col-3 mt-5 FooterContentStyle">
              <h5><b>Company</b></h5>
              <p>About Us</p>
              <p>Features</p>
              <p>Team</p>
              <p>News</p>
              <p>FAQs</p>

          </div>

          <div className="col-3 mt-5 FooterContentStyle">
              <h5><b>Resources</b></h5>
              <p></p>
              <p>Whitepaper</p>
              <p>Token sales</p>
              <p>Privacy Policy</p>
              <p>Terms & Conditions</p>

          </div>

          <div className="col-3 mt-5 FooterContentStyle">
              <h5><b>Links</b></h5>
              <p>Tokens</p>
              <p>Roadmap</p>
              <p>FAQs</p>

          </div>

          <div className="col-3 mt-5  FooterContentStyle">
              <h5><b>Latest News</b></h5>
              <p><span className="CryptocurrencyStyle">Cryptocurrency</span></p>
              <h5><b>Donec pede justo aliquet nec</b></h5>
              <p> <img src={Cal} alt=""/> 04 Mar, 2020</p>
              <hr/>
              <p><span className="CryptocurrencyStyle">Cryptocurrency</span></p>
              <h5><b>In turpis, Pellentesque</b></h5>
              <p><img src={Cal} alt=""/> 12 Mar, 2020</p>

          </div>

          
          
              
          </div>
          <div className="container">
          <img src={Line} alt=""/>

          </div>
          <div className=" container finalPart pb-3">
              <img src={StokeLogo} alt=""/>
              <p>2020 © Skote. Design & Develop by Themesbrand<br/>

              It will be as simple as occidental in fact, it will be to an english person, it will seem like
                <br/>simplified English, as a skeptical</p>
          </div>
        </div>
    );
};

export default Footer;