import { TYPE_CLASSNAMES } from '../utils/theme';

export default function Types({ types }) {
  return (
    <>
      {types.length > 0
        ? types.map((item) => (
            <span
              key={item.type.name}
              className={`pokemon-type-badge ${TYPE_CLASSNAMES[item.type.name] || ''}`}
            >
              {item.type.name}
            </span>
          ))
        : <span> </span>}
    </>
  );
}
