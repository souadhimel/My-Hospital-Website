import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { FaAngleDoubleRight } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>About</span> us
      </h1>

      <div className="row">
        <div className="image">
          <img src="image/about-img.svg" alt="" />
        </div>

        <div className="content">
          <h3>We take care of your healthy life</h3>
          <p>
            Close to Home. Close to Your Heart. Compassion. Innovation.
            Trust......
          </p>
          <p>Because Your Life Matters. Healing Hands. Caring Hearts........</p>
          <Link to="/about" className="btn">
            contact us <FaAngleDoubleRight></FaAngleDoubleRight>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
