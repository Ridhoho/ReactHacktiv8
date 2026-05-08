import Button from 'react-bootstrap/Button';

export default function Pagination({ previous, next, handlePrevious, handleNext }) {
  return (
    <div className="d-flex justify-content-center gap-3 my-4">
      <Button
        className="pokedex-button pokedex-button-prev"
        onClick={handlePrevious}
        disabled={!previous}
      >
        ← Previous
      </Button>
      <Button
        className="pokedex-button pokedex-button-next"
        onClick={handleNext}
        disabled={!next}
      >
        Next →
      </Button>
    </div>
  );
}
