import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/">
        <div className="navigation navbar-brand">SuperPedia</div>
      </Link>

      <Link to="/home">Home</Link>
      <Link to="/heroes">All Heroes</Link>
      <Link to="/popular">Popular Heroes</Link>
    </div>
  );
};

export default Navigation;
