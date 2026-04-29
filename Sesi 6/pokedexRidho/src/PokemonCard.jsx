import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PokemonCarousel from './components/PokemonCarousel';
import PokemonTypes from './components/PokemonTypes';
import PokemonAbilities from './components/PokemonAbilities';
import PokemonStatsTable from './components/PokemonStatsTable';
import {
  PRIMARY_TYPE_CLASSNAMES,
  SECONDARY_TYPE_CLASSNAMES,
} from './utils/pokemonTheme';
import { getEnglishAbilityShortEffect } from './utils/pokemonApi';

export default function PokemonCard({ pokemon, number }) {
  const detail = pokemon?.detail;
  const types = detail?.types ?? [];
  const stats = detail?.stats ?? [];
  const [abilityEffects, setAbilityEffects] = useState([]);
  const [isAbilityLoading, setIsAbilityLoading] = useState(false);
  const paddedNumber = String(number).padStart(3, "0");
  const imageFront = pokemon?.detail?.sprites?.front_default;
  const imageBack = pokemon?.detail?.sprites?.back_default;
  const pokemonName = pokemon?.name;
  const cardClassName = [
    'pokemon-card',
    types[0] ? PRIMARY_TYPE_CLASSNAMES[types[0].type.name] : '',
    types[1] ? `pokemon-card-dual ${SECONDARY_TYPE_CLASSNAMES[types[1].type.name]}` : '',
  ].filter(Boolean).join(' ');

  useEffect(() => {
    let cancelled = false;

    const getAbilityEffects = async () => {
      const abilityList = detail?.abilities ?? [];

      if (abilityList.length === 0) {
        setAbilityEffects([]);
        return;
      }

      setIsAbilityLoading(true);
      try {
        const details = await Promise.all(
          abilityList.map(async (a) => {
            return {
              name: a.ability.name,
              short_effect: await getEnglishAbilityShortEffect(a.ability.url),
            };
          })
        );

        if (!cancelled) {
          setAbilityEffects(details);
        }
      } catch {
        if (!cancelled) {
          setAbilityEffects(
            abilityList.map((a) => ({
              name: a.ability.name,
              short_effect: '-',
            }))
          );
        }
      } finally {
        if (!cancelled) {
          setIsAbilityLoading(false);
        }
      }
    };

    getAbilityEffects();
    return () => {
      cancelled = true;
    };
  }, [detail]);

  const findStat = (name) => stats.find((s) => s.stat.name === name)?.base_stat ?? '-';

  return (
    <Card className={cardClassName}>
      <h3 className="pokemon-card-number">No. {paddedNumber}</h3>
      <PokemonCarousel
        imageFront={imageFront}
        imageBack={imageBack}
        pokemonName={pokemonName}
      />

      <Card.Body>
        <Card.Title className="pokemon-card-title">
          {pokemonName?.toUpperCase()}
        </Card.Title>
        <Card.Text as="div" className="pokemon-types-row">
          <PokemonTypes types={types} />
        </Card.Text>
        <Card.Text as="div" className="mb-0">
          <PokemonAbilities
            isAbilityLoading={isAbilityLoading}
            abilityEffects={abilityEffects}
          />
        </Card.Text>
      </Card.Body>

      <PokemonStatsTable stats={stats} findStat={findStat} />
    </Card>
  );
}
