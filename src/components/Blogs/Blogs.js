import React from "react";
import "./Blogs.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FcCalendar, FcGraduationCap } from "react-icons/fc";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our <span>blogs</span>
      </h1>

      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src="image/blog-1.jpg" alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <Link to="/blogs">
                {" "}
                <i className="fas fa-calendar">
                  {" "}
                  <FcCalendar></FcCalendar>{" "}
                </i>{" "}
                21st may, 2018{" "}
              </Link>
              <Link to="/blogs">
                {" "}
                <i className="fas fa-user">
                  {" "}
                  <FcGraduationCap></FcGraduationCap>{" "}
                </i>{" "}
                by admin{" "}
              </Link>
            </div>
            <h3>liver cancer</h3>
            <p>
              Cirrhosis is a late-stage liver disease in which healthy liver is
              replaced with scar tissue and the liver is damaged..........
            </p>
            <Link to="/blogs" className="btn">
              learn more{" "}
              <span className="fas fa-chevron-right">
                {" "}
                <FaAngleDoubleRight></FaAngleDoubleRight>{" "}
              </span>
            </Link>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src="image/blog-2.jpg" alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <Link to="/blogs">
                {" "}
                <i className="fas fa-calendar">
                  <FcCalendar></FcCalendar>
                </i>{" "}
                8th march, 2020{" "}
              </Link>
              <Link to="/blogs">
                {" "}
                <i className="fas fa-user">
                  <FcGraduationCap></FcGraduationCap>
                </i>{" "}
                by admin{" "}
              </Link>
            </div>
            <h3>Diabetes</h3>
            <p>
              Diabetes is a chronic health condition that affects how your body
              turns food into energy. Most of the food you........
            </p>
            <Link to="/blogs" className="btn">
              learn more{" "}
              <span className="fas fa-chevron-right">
                <FaAngleDoubleRight></FaAngleDoubleRight>
              </span>
            </Link>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <img src="image/blog-3.jpg" alt="" />
          </div>
          <div className="content">
            <div className="icon">
              <Link to="/blogs">
                {" "}
                <i className="fas fa-calendar">
                  <FcCalendar></FcCalendar>
                </i>{" "}
                23rd april, 2021{" "}
              </Link>
              <Link to="/blogs">
                {" "}
                <i className="fas fa-user">
                  <FcGraduationCap></FcGraduationCap>
                </i>{" "}
                by admin{" "}
              </Link>
            </div>
            <h3>heart disease</h3>
            <p>
              Heart disease is the leading cause of death in the United States,
              causing about 1 in 4 deaths. 1. The term “heart disease”
              refers................
            </p>
            <Link to="#" className="btn">
              learn more{" "}
              <span className="fas fa-chevron-right">
                <FaAngleDoubleRight></FaAngleDoubleRight>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
