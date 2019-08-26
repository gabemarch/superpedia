import React from "react";
import { Link } from "react-router-dom";

const Heroes = ({ heroes, loading }) => {
  if (loading) {
    return <div className="loader" />;
  } else {
    return (
      <div className="heroes">
        {heroes.map(hero => (
          <div className="heroes-card card" key={hero.id}>
            <Link to={`/heroes/${hero.id}`}>
              <ul className="heroes-list">
                <li className="heroes-list-items">{hero.name}</li>
              </ul>
              <img src={hero.images.md} alt="" />
            </Link>
          </div>
        ))}
      </div>
    );
  }
};
export default Heroes;
