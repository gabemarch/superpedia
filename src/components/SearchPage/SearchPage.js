import React, { Component, Fragment } from "react";
import axios from "../../axios";
import SearchResults from "../SearchResults/SearchResults";
const accesToken = "2318468541539963";

class SearchPage extends Component {
  state = {
    filteredHeroes: [],
    heroName: "",
    isLoading: false
  };

  findHero = e => {
    e.preventDefault();
    console.log("request send");
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${accesToken}/search/${encodeURIComponent(
          this.state.heroName
        )}`
      )
      .then(this.setState({ isLoading: true }))
      .then(res => {
        this.setState({ filteredHeroes: res.data, isLoading: false });
        console.log(this.state.filteredHeroes);
      });
  };

  handleOnInputChange = e => {
    const heroName = e.target.value;
    this.setState({ heroName });
    console.log(heroName);
  };

  render() {
    const { filteredHeroes, heroName, isLoading } = this.state;
    console.log(!filteredHeroes.length);
    return (
      <Fragment>
        <div className="search-page">
          <h1>Search your favourite hero or villain</h1>
          <form onSubmit={this.findHero}>
            <input
              className="search-page-input"
              type="text"
              name="heroName"
              placeholder="Search..."
              value={heroName}
              onChange={this.handleOnInputChange}
            />
          </form>
          <button
            className="search-page-button"
            type="submit"
            onClick={this.findHero}
          >
            Search
          </button>
          {isLoading ? <div className="loader" /> : null}
        </div>
        {filteredHeroes.response === "success" ? (
          <SearchResults filteredHeroes={filteredHeroes} />
        ) : null}
        {filteredHeroes.response === "error" ? (
          <span className="error-message">Sorry, couldn't find the hero... please try again!</span>
        ) : null}
      </Fragment>
    );
  }
}
export default SearchPage;
