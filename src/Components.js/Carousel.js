import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

export const MyCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 " src="carousel.jpg" alt="carousel" />
        <Carousel.Caption>
          <h3>Join our Community and Earn 300 Points.</h3>
          <p>
            Share your opinion by participating in surveys and Earn cash and
            shopping vouchers
          </p>

          <Button variant="danger">Play Video</Button>
          <Button variant="primary">Join Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
