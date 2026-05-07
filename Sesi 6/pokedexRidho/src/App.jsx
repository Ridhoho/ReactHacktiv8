import { useEffect, useState } from "react";
import "./App.css";
import PokeCard from "./PokeCard";
import Header from "./components/Header";
import Pagination from "./components/Pagination";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { POKEAPI_ALL_URL, POKEAPI_PAGE_URL, fetchPokemonDetail } from "./utils/pokeApi";
import { TYPE_COLORS } from "./utils/typeColors";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [previous, setPrevious] = useState(null);
  const [next, setNext] = useState(null);
  const [offset, setOffset] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [titleColor, setTitleColor] = useState(TYPE_COLORS[0]);

  const getPokemons = async (url) => {
    const response = await fetch(url || POKEAPI_PAGE_URL);
    const data = await response.json();
    const details = await Promise.all(data.results.map(fetchPokemonDetail));
    setPokemons(details);
    setPrevious(data.previous);
    setNext(data.next);
  };

  const getAllPokemons = async () => {
    try {
      const response = await fetch(POKEAPI_ALL_URL);
      const data = await response.json();
      setAllPokemons(data.results);
    } catch (error) {
      console.error("Error fetching all pokemon:", error);
    }
  };

  const handleNext = () => {
    if (!next) return;
    getPokemons(next);
    setOffset((currentOffset) => currentOffset + 20);
  };

  const handlePrevious = () => {
    if (!previous) return;
    getPokemons(previous);
    setOffset((currentOffset) => currentOffset - 20);
  };

  useEffect(() => {
// eslint-disable-next-line react-hooks/set-state-in-effect
    getPokemons();
    getAllPokemons();
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearch(searchInput);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchInput]);

  useEffect(() => {
    let cancelled = false;

    const runGlobalSearch = async () => {
      const query = debouncedSearch.trim().toLowerCase();
      if (!query) {
        setSearchResults([]);
        return;
      }

      const matched = allPokemons
        .map((p, idx) => ({ ...p, number: idx + 1 }))
        .filter((p) => {
          const paddedNumber = String(p.number).padStart(3, "0");
          return p.name.includes(query) || paddedNumber.includes(query);
        })
        .slice(0, 40);

      const details = await Promise.all(matched.map(fetchPokemonDetail));

      if (!cancelled) {
        setSearchResults(details);
      }
    };

    runGlobalSearch();
    return () => {
      cancelled = true;
    };
  }, [debouncedSearch, allPokemons]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * TYPE_COLORS.length);
      setTitleColor(TYPE_COLORS[randomIndex]);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const filteredPokemons = debouncedSearch
    ? searchResults.map((p) => ({ p, number: p.number }))
    : pokemons.map((p, i) => ({ p, number: offset + i + 1 }));

  return (
    <Container
      fluid
      className="px-0 pokedex-app-shell"
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        titleColor={titleColor}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Row xs={1} sm={2} md={3} lg={4} className="g-0">
        {filteredPokemons.map(({ p, number }) => (
          <Col key={p.name}>
            <PokeCard pokemon={p} number={number} />
          </Col>
        ))}
      </Row>
      <Pagination
        previous={previous}
        next={next}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </Container>
  );
}

export default App;
