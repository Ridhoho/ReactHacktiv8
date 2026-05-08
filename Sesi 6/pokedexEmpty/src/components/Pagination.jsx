import Button from 'react-bootstrap/Button';

export default function Pagination() {
  return (
    <div className="d-flex justify-content-center gap-3 my-4">
      <Button
       className="pokedex-button pokedex-button-prev"
       -
       -
       >
        ← Previous
      </Button>
      <Button
       className="pokedex-button pokedex-button-next"
       -
       -
       >
        Next →
      </Button>
    </div>
  );
}
