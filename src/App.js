import React, { useEffect, useState } from "react";
import "./App.scss";
import Pagination from "./components/Pagination/Pagination";
import Heroes from "./components/Heroes/Heroes";
import axios from "./axios";

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [heroesPerPage] = useState(10);

  useEffect(() => {
    const fetchHeroes = async () => {
      setLoading(true);
      const res = await axios.get(".json");
      setHeroes(res.data);
      setLoading(false);
    };

    fetchHeroes();
  }, []);

  const indexOfLastHero = currentPage * heroesPerPage;
  const indexofFirstHero = indexOfLastHero - heroesPerPage;
  const currentHeroes = heroes.slice(indexofFirstHero, indexOfLastHero);

  // Change pages
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Heroes heroes={currentHeroes} loading={loading} />
      <Pagination
        heroesPerPage={heroesPerPage}
        totalHeroes={heroes.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
