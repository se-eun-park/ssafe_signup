import React from "react";
import { Link } from "react-router-dom";
import SignUpButton from "../components/SignUpButton";

const HomePage = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <Link to="signup">
        <SignUpButton />
      </Link>
    </div>
  );
};

export default HomePage;
