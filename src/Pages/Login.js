import React from "react";
import { Logincard } from "../cards/Logincard";
import { FouterSection } from "../Components.js/FouterSection";
import { LoginSection } from "../Components.js/LoginSection";
import { MyNavbar } from "./nav";

export const Login = () => {
  return (
    <>
      <MyNavbar />
      <LoginSection />
      <Logincard />
      <FouterSection />
    </>
  );
};
