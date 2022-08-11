import React from "react";
import { SignupCard } from "../cards/SignupCard";
import { FouterSection } from "../Components.js/FouterSection";
import { SignupSection } from "../Components.js/SignupSection";
import { MyNavbar } from "./nav";

export const Signup = () => {
  return (
    <>
      <MyNavbar />
      <SignupSection />
      <SignupCard />
      <FouterSection />
    </>
  );
};
