import BSCarousel from 'react-bootstrap/Carousel';

export default function Carousel({ imageFront, imageBack, pokemonName }) {
  return (
    <BSCarousel interval={5000}>
      {imageFront && (
        <BSCarousel.Item>
          <img className="d-block w-100" src={imageFront} alt={`${pokemonName} front`} />
        </BSCarousel.Item>
      )}
      {imageBack && (
        <BSCarousel.Item>
          <img className="d-block w-100" src={imageBack} alt={`${pokemonName} back`} />
        </BSCarousel.Item>
      )}
    </BSCarousel>
  );
}
