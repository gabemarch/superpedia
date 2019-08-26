import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const Hero = ({ match }) => {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({
    images: {},
    powerstats: {},
    biography: {},
    work: {}
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://akabab.github.io/superhero-api/api/id/${match.params.id}.json`
    );
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <Fragment>
      <h1>{item.name}</h1>
      <Link to="/heroes" className="go-back-link">
        <span> &larr; Go back</span>
      </Link>
      <div className="hero-page">
        <img src={item.images.lg} alt="" />
        <div className="hero-page-biography">
          <h2>Biography</h2>
          <p>
            <strong>Full name:</strong> {item.biography.fullName}
          </p>
          <p>
            <strong>Alignment:</strong> {item.biography.alignment}
          </p>
          <p>
            <strong>Alteregos:</strong> {item.biography.alterEgos}
          </p>
          <p>
            <strong>Place Of Birth:</strong> {item.biography.placeOfBirth}
          </p>
          <p>
            <strong>Occupation:</strong> {item.work.occupation}
          </p>
          <p>
            <strong>First Appearance:</strong> {item.biography.firstAppearance}
          </p>
          <p>
            <strong>Publisher:</strong> {item.biography.publisher}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
