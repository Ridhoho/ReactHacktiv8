import { TYPE_CLASSNAMES } from '../utils/pokemonTheme';

export default function PokemonTypes({ types }) {
  return (
    <>
      {types.length > 0
        ? types.map((typeItem) => (
            <span
              key={typeItem.type.name}
              className={`pokemon-type-badge ${TYPE_CLASSNAMES[typeItem.type.name] || ''}`}
            >
              {typeItem.type.name}
            </span>
          ))
        : <span>-</span>}
    </>
  );
}
