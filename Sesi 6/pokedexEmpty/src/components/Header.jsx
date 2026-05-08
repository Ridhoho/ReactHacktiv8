import Form from 'react-bootstrap/Form';

export default function Header() {
  return (
    <>
      <h1
      className="pokedex-title"
      -
      >
        POKEDEX
      </h1>
      <Form.Control
        type="text"
        placeholder="Search by name or number"
        className="pokedex-search-input"
        -
        -
      />
    </>
  );
}
