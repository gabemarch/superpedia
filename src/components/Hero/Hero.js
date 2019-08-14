import React, { useState, useEffect } from "react";
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
    <div className="hero-page">
      <Link to="/heroes">
        <span>Go back</span>
      </Link>
      <h1>{item.name}</h1>
      <img src={item.images.lg} alt="" />
      <div className="hero-page-biography">
        <h2>Biography</h2>
        <p>Fullname: {item.biography.fullName}</p>
        <p>Alignment: {item.biography.alignment}</p>
        <p>Alteregos: {item.biography.alterEgos}</p>
        <p>Place Of Birth: {item.biography.placeOfBirth}</p>
        <p>Occupation: {item.work.occupation}</p>
        <p>First Appearance: {item.biography.firstAppearance}</p>
        <p>Publisher: {item.biography.publisher}</p>
      </div>
      <div className="hero-page-powers">
        <h2>Hero Powers</h2>
        <ul>
          {Object.keys(item.powerstats).map((powerstatKey, i) => (
            <li key={i}>{powerstatKey}</li>
          ))}
        </ul>
        <ul>
          {Object.values(item.powerstats).map((powerstatVal, i) => (
            <li key={i}>{powerstatVal}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
