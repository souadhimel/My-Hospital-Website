import React from "react";
import "./Review.css";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
  return (
    <section class="review" id="review">
      <h1 class="heading">
        Client's <span>review</span>
      </h1>

      <div class="box-container">
        <div class="box">
          <img src="image/pic-1.png" alt="" />
          <h3>Mark Travesty</h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>

            <i class="fas fa-star-half-alt">
              <FaStarHalfAlt></FaStarHalfAlt>
            </i>
          </div>
          <p class="text">
            I am very much pleased about your service. You became the savior
            when I need you badly.
          </p>
        </div>

        <div class="box">
          <img src="image/pic-2.png" alt="" />
          <h3>Tracy Dwason</h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
          </div>
          <p class="text">
            Very much professional and up to the mark. God bless you!
          </p>
        </div>

        <div class="box">
          <img src="image/pic-3.png" alt="" />
          <h3>Lucy Brown</h3>
          <div class="stars">
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>
            <i class="fas fa-star">
              <FaStar></FaStar>
            </i>

            <i class="fas fa-star-half-alt">
              <FaStarHalfAlt></FaStarHalfAlt>
            </i>
          </div>
          <p class="text">
            Nothing so much pleasant to see your service when I in need of you!
            Hats off!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;
