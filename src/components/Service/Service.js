import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { picture, name, id } = props.service;

  return (
    <div className="col service-card">
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5>Service:{name}</h5>
          <Link to={`/details/${id}`}>Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
