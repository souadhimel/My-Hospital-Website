import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";

import {
  FaAngleDoubleRight,
  FaUserMd,
  FaUsers,
  FaProcedures,
  FaHospital,
} from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="image">
          <img src="image/home-img.svg" alt="" />
        </div>

        <div className="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            We are here for you 24/7. You can count on us for any emergencies.
            We will try our level best to make you happy with earth-enticing
            smiles onwards! Why so late?
          </p>
          <Link to="/home" className="btn">
            contact us <FaAngleDoubleRight></FaAngleDoubleRight>
          </Link>
        </div>
      </section>

      <div className="icons-container">
        <div className="icons">
          <i className="fas fa-user-md">
            <FaUserMd></FaUserMd>
          </i>
          <h3>140+</h3>
          <p>doctors at work</p>
        </div>

        <div className="icons">
          <i className="fas fa-users">
            <FaUsers></FaUsers>
          </i>
          <h3>1040+</h3>
          <p>satisfied patients</p>
        </div>

        <div className="icons">
          <i className="fas fa-procedures">
            <FaProcedures></FaProcedures>
          </i>
          <h3>500+</h3>
          <p>bed facility</p>
        </div>

        <div className="icons">
          <i className="fas fa-hospital">
            <FaHospital></FaHospital>
          </i>
          <h3>80+</h3>
          <p>available hospitals</p>
        </div>
      </div>
    </>
  );
};

export default Home;
