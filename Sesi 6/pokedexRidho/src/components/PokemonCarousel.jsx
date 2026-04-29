import Carousel from 'react-bootstrap/Carousel';

export default function PokemonCarousel({ imageFront, imageBack, pokemonName }) {
  return (
    <Carousel interval={5000}>
      {imageFront && (
        <Carousel.Item>
          <img className="d-block w-100" src={imageFront} alt={`${pokemonName} front`} />
        </Carousel.Item>
      )}
      {imageBack && (
        <Carousel.Item>
          <img className="d-block w-100" src={imageBack} alt={`${pokemonName} back`} />
        </Carousel.Item>
      )}
    </Carousel>
  );
}
