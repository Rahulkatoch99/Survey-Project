import React from "react";
import { MyCarousel } from "../Components.js/Carousel";

import { MyNavbar } from "./nav";
import { Section2 } from "../Components.js/Section2";
import { Section3 } from "../Components.js/Section3";

export const Home = () => {
  return (
    <>
      <MyNavbar />
      <MyCarousel />
      <Section2 />
      <Section3 />
    </>
  );
};
