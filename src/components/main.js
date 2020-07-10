import React from "react"
import { FaTag, FaWrench, FaCheck, FaBook, FaMap, FaRoad, FaClock, FaSearch, FaEnvelope, FaFacebookSquare, FaInstagram, FaLinkedin} from "react-icons/fa";
export default () => (
  <main>

    <section id="home">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5">
        </div>
        <div className="col-md-7 home--right">
          <div className="main__titleContainer">
            <h1 className="display-4 main__title">ZSOFIA SZONYI</h1>
            <h2 className="main__subtitle">Software developer</h2>
            <a type="button" className="button" href="#contact">Get in touch</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about">
    <div className="container-fluid yellow about">
      <div className="row">
        <div className="col-md-6 about__container">
          <h2 className="display-4 main__title">About Me</h2>
          <div className="about__content">
            <div className="about__text">
              <p>I'm a self-taught developer & Makers graduate, who enjoys the challenges and continuous learning process coding involves.</p>
              <p>I made a career switch to software development because I wanted to solve people's problems and create amazing products.</p>
              <p>When I'm not making websites or learning about software development, you can find me exploring new places, climbing walls, baking, or learning languages.</p>
              <br />
              <a type="button" className="button button--dark about__button" href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="img__container">
            <img src="./Zsofi.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="moreInfo">
    <div className="container-fluid purple">
      <div className="row">
        <div className="col-sm-6 moreInfo--right">
        </div>
        <div className="col-sm-6 home--left moreInfo--left">
        <h2 className="display-4 main__title">My tools & interests</h2>
          <div className="bullets">
          <p className="bullet">
            <FaClock className="icons" />Programming languages, web tech: Javascript, Ruby, React, JQuery, HTML5, CSS3, Bootstrap, EJS</p>
            <p className="bullet">
              <FaTag className="icons" />Testing: RSpec, Capybara, Jasmine, Cypress, Jest</p>
            <p className="bullet">
              <FaBook className="icons" />Backend: Node.js, Express, Sinatra, Firebase</p>
            <p className="bullet">
              <FaWrench className="icons" />Database: MongoDB, PostgreSQL, Firestore</p>
            <p className="bullet">
              <FaSearch className="icons" />Agile: TDD, Extreme Programming, Continuous Integration, Git</p>
            <p className="bullet">
              <FaMap className="icons" />Exploring: React Native</p>
            <p className="bullet">
              <FaRoad className="icons" />Interests: travel, climbing, baking, hiking, foreign languages</p>
          </div>
        </div>
        </div>
      </div>
  </section>

  <section id="contact">
    <div className="container-fluid yellow">
      <div className="row">
        <div className="col-sm home--right contact--right">
          <h2 className="display- main__title">Let's get in touch</h2>
          <p>szonyi.zsofia@gmail.com</p>
          <p className="phone" >+44 7452 987 703</p>
          <div className="contact__container">
            <a className="contact__link" target="_blank" rel="noopener noreferrer"  href="mailto:szonyi.zsofia@gmail.com">
              <FaEnvelope className="icons" />
            </a>
            <a className="contact__link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zsofia-szonyi-34b8b6b6/">
              <FaLinkedin className="icons" />
            </a>
            <a className="contact__link" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=1165892913">
              <FaFacebookSquare className="icons" />
            </a>
            <a className="contact__link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zsofinthesun/">
              <FaInstagram className="icons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  </main>
)
