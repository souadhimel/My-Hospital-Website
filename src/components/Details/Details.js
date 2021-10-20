import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("/Hospital.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const { id } = useParams();
  const details = services.find(
    (service) => parseInt(service.id) === parseInt(id)
  );
  console.log(details);
  return (
    <div className="box">
      {details && <img src={details.picture} alt="" />}
      <h3>{details && details.name}</h3>
      <p>{details && details.description}</p>
    </div>
  );
};

export default Details;
