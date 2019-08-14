import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import darkseid from "../../assets/darkseid.jpg";
import spiderman from "../../assets/spiderman.png";
import batman from "../../assets/batman.jpg";

const Home = () => {
  return (
    <div className="homepage">
      <h1>SuperPedia</h1>
      <div className="homepage-cards">
        <Card>
          <Card.Img variant="top" src={darkseid} />
          <Card.Body>
            <Card.Title>Ultimate Superhero Database</Card.Title>
            <Card.Text>
              Browse from more than 500 heroes and villains. Read their
              biography, and learn more about them!
            </Card.Text>
            <Link to="/heroes">
              <Button variant="primary">See All Super!</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={spiderman} />
          <Card.Body>
            <Card.Title>The Popular Ones</Card.Title>
            <Card.Text>
              Go and check out the most popular heroes and anti-heroes.
            </Card.Text>
            <Link to="/popular">
              <Button variant="primary">See The Popular Ones</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={batman} />
          <Card.Body>
            <Card.Title>You Can Search</Card.Title>
            <Card.Text>
              Search your favourite super and learn more about it!
            </Card.Text>
            <Link to="/search">
              <Button variant="primary">Search Your Favourite</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="footer">
        <span>
          <strong>Copyright:</strong>{" "}
        </span>
        <span>Gabor Szilagyi</span>
        <span> {new Date().getFullYear()} </span>
      </div>
    </div>
  );
};

export default Home;
