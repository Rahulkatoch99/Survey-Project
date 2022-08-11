import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

export const Section3 = () => {
  return (
    <>
      <Carousel>
        <img className="d-block w-100 " src="joinus.jpg" alt="joinus" />
        <Carousel.Caption>
          <h2>
            Online
            <span>Community</span>
          </h2>
          <p>
            As a free online community, GoWebSurveys gives you the opportunity
            to fill out surveys and participate in other market research studies
            sponsored by major companies.
          </p>

          <Button className="btn-success btn-circle">Join Us</Button>
        </Carousel.Caption>
      </Carousel>
    </>
  );
};
