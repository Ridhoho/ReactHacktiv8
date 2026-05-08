import Form from "react-bootstrap/Form";

export default function Header({ titleColor, searchInput, setSearchInput }) {
  return (
    <>
      <h1
      className="pokedex-title"
      style={{ color: titleColor }}>
        POKEDEX
      </h1>
      <Form.Control
        type="text"
        placeholder="Search by name or number"
        className="pokedex-search-input"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
    </>
  );
}
