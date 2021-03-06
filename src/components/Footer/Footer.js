import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,
  FaAmbulance,
  FaDiagnoses,
  FaHeartbeat,
  FaBlog,
} from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";
import { BiBody } from "react-icons/bi";
import {
  FcCallback,
  FcGlobe,
  FcVoicemail,
  FcCellPhone,
  FcHome,
  FcServices,
  FcAbout,
  FcManager,
  FcCheckmark,
  FcComments,
} from "react-icons/fc";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              <FcHome></FcHome>
            </i>{" "}
            home{" "}
          </Link>
          <Link to="/services">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FcServices></FcServices>{" "}
            </i>{" "}
            services{" "}
          </Link>
          <Link to="/about">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FcAbout></FcAbout>{" "}
            </i>{" "}
            about{" "}
          </Link>
          <Link to="/doctors">
            {" "}
            <i className="fas fa-chevron-right">
              <FcManager></FcManager>
            </i>{" "}
            doctors{" "}
          </Link>
          <Link to="/book">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FcCheckmark></FcCheckmark>{" "}
            </i>{" "}
            book{" "}
          </Link>
          <Link to="/review">
            {" "}
            <i className="fas fa-chevron-right">
              <FcComments></FcComments>
            </i>{" "}
            review{" "}
          </Link>
          <Link to="/blogs">
            {" "}
            <i className="fas fa-chevron-right">
              <FaBlog></FaBlog>
            </i>{" "}
            blogs{" "}
          </Link>
        </div>

        <div className="box">
          <h3>our services</h3>
          <Link to="#">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <BiBody></BiBody>{" "}
            </i>{" "}
            dental care{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <RiPsychotherapyFill></RiPsychotherapyFill>{" "}
            </i>{" "}
            massage therapy{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FaHeartbeat></FaHeartbeat>{" "}
            </i>{" "}
            cardiology{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FaDiagnoses></FaDiagnoses>{" "}
            </i>{" "}
            diagnosis{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FaAmbulance></FaAmbulance>{" "}
            </i>{" "}
            ambulance service{" "}
          </Link>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <Link to="#">
            {" "}
            <i className="fas fa-phone">
              {" "}
              <FcCallback></FcCallback>{" "}
            </i>{" "}
            +123-456-7890{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-phone">
              <FcCellPhone></FcCellPhone>{" "}
            </i>{" "}
            +111-222-3333{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-envelope">
              {" "}
              <FaEnvelope></FaEnvelope>{" "}
            </i>{" "}
            health.care@gmail.com{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-envelope">
              {" "}
              <FcVoicemail></FcVoicemail>
            </i>{" "}
            voice.mail@gmail.com{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fas fa-map-marker-alt">
              {" "}
              <FcGlobe></FcGlobe>{" "}
            </i>{" "}
            Dhaka, Bangladesh - 1215{" "}
          </Link>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <Link to="#">
            {" "}
            <i className="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </i>{" "}
            facebook{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </i>{" "}
            twitter{" "}
          </Link>

          <Link to="#">
            {" "}
            <i className="fab fa-instagram">
              {" "}
              <FaInstagram></FaInstagram>{" "}
            </i>{" "}
            instagram{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-linkedin">
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </i>{" "}
            linkedin{" "}
          </Link>
          <Link to="#">
            {" "}
            <i className="fab fa-pinterest">
              <FaPinterest></FaPinterest>{" "}
            </i>{" "}
            pinterest{" "}
          </Link>
        </div>
      </div>

      <div className="credit">
        created by <span>Souad Anam Himel</span> | all rights reserved @2021
      </div>
    </section>
  );
};

export default Footer;
