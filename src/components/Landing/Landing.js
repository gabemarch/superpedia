import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Fragment>
      <div className="home">
        <div className="home-details">
          <h1>Welcome to the Superhero database</h1>
          <Link to="/home">
            <button> I want to see the heroes!</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
