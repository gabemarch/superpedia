import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const SearchResults = props => {
  console.log(props);
  return (
    <div className="search-results">
      {props.filteredHeroes.results.map(res => (
        <Fragment key={res.id}>
          <div className="search-results-list">
            <h2 className="search-results-list-items"> {res.name}</h2>
            <p className="search-results-name">
              Aliases: {res.biography.aliases.join(",")}
            </p>
            <img src={res.image.url} alt="" className="search-results-img" />
            <Link to={`/heroes/${res.id}`} className="search-results-link">
              See More
            </Link>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default SearchResults;
