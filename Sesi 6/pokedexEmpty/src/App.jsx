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

  

  return (
    <Container
      fluid
      className="px-0 pokedex-app-shell"
      style={{ minHeight: "100vh" }}
    >
      <Header 
      -
      -
      -
      />
      <Row xs={1} sm={2} md={3} lg={4} className="g-0">
        -
        -
        -
        -
        -
      </Row>
      <Pagination
        -
        -
        -
        -
      />
    </Container>
  );
}

export default App;
