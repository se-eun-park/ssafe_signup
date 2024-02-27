import React from "react";
import { Link } from "react-router-dom";
import SignUpButton from "../components/SignUpButton";

const HomePage = () => {
  return (
    <>
      <Link to="signup">
        <SignUpButton />
      </Link>
    </>
  );
};

export default HomePage;
