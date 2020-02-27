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
            <h2 className="main__subtitle">Front-end developer</h2>
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
          <h2 className="display-4 main__title">About Zsofi</h2>
          <div className="about__content">
            <div className="about__text">
              <p>I'm a self-taught front-end developer based in Watford, UK.</p>
              <p>When I'm not making websites or learning about web development, you can find me exploring new places, climbing walls or baking.</p>
              <p>Do you need a new website or help with an existing one? I can help.</p>
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
            <FaClock className="icons" />Web technologies: HTML, CSS, Bootstrap, EJS, SCSS</p>
            <p className="bullet">
              <FaTag className="icons" />Scripts: Javascript, jQuery, React</p>
            <p className="bullet">
              <FaBook className="icons" />Backend: Node.js</p>
            <p className="bullet">
              <FaWrench className="icons" />Database: MongoDB</p>
            <p className="bullet">
              <FaSearch className="icons" />Other: Git, Google Analytics</p>
            <p className="bullet">
              <FaMap className="icons" />Exploring: React Native</p>
            <p className="bullet">
              <FaRoad className="icons" />Interests: travel, climbing, baking</p>
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
