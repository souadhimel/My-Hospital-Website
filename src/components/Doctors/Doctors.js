import "./Doctors.css";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const Doctors = () => {
  return (
    <section class="doctors" id="doctors">
      <h1 class="heading">
        Our <span>doctors</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="image/doc-1.jpg" alt="" />
          <h3>
            Nathan Smith <FcApproval></FcApproval>{" "}
          </h3>
          <span>Cardiologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-2.jpg" alt="" />
          <h3>
            Trevor Johan <FcApproval></FcApproval>{" "}
          </h3>
          <span>Oncologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-3.jpg" alt="" />
          <h3>
            Kyle Sympson <FcApproval></FcApproval>{" "}
          </h3>
          <span>Dermatologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-4.jpg" alt="" />
          <h3>
            Tim Pain <FcApproval></FcApproval>{" "}
          </h3>
          <span>Endocrinologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-5.jpg" alt="" />
          <h3>
            Alven Morata <FcApproval></FcApproval>{" "}
          </h3>
          <span>Gastroenterologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="image/doc-6.jpg" alt="" />
          <h3>
            Sylvein Friya <FcApproval></FcApproval>{" "}
          </h3>
          <span>Gynecologist</span>
          <div class="share">
            <a href="#" class="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </a>
            <a href="#" class="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </a>
            <a href="#" class="fab fa-instagram">
              <FaInstagram></FaInstagram>
            </a>
            <a href="#" class="fab fa-linkedin">
              <FaLinkedin></FaLinkedin>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
