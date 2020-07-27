import React from "react";

export default ({ title, description, number, animation }) => (
  <section className="section-3">
    <div className="number">{number}</div>
    <div className="text">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </div>
    <div className="graphic">{animation}</div>
  </section>
);
