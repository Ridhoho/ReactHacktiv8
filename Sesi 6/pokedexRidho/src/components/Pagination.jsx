import Button from 'react-bootstrap/Button';

export default function Pagination({ previous, next, handlePrevious, handleNext }) {
  return (
    <div className="d-flex justify-content-center gap-3 my-4">
      <Button
        onClick={handlePrevious}
        disabled={!previous}
        className="pokedex-button pokedex-button-prev"
      >
        ← Previous
      </Button>
      <Button
        onClick={handleNext}
        disabled={!next}
        className="pokedex-button pokedex-button-next"
      >
        Next →
      </Button>
    </div>
  );
}
