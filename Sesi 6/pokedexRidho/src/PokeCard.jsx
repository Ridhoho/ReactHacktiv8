import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "./components/Carousel";
import Types from "./components/Types";
import Abilities from "./components/Abilities";
import StatsTable from "./components/StatsTable";
import {
  PRIMARY_TYPE_CLASSNAMES,
  SECONDARY_TYPE_CLASSNAMES,
} from "./utils/theme";
import { getEnglishAbilityShortEffect } from "./utils/pokeApi";

export default function PokeCard({ pokemon, number }) {
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
    "pokemon-card",
    types[0] ? PRIMARY_TYPE_CLASSNAMES[types[0].type.name] : "",
    types[1]
      ? `pokemon-card-dual ${SECONDARY_TYPE_CLASSNAMES[types[1].type.name]}`
      : "",
  ]
    .filter(Boolean)
    .join(" ");

  useEffect(() => {
    // CLUES.md: 1. Start by getting the abilities array from `detail`.
    let cancelled = false;
    const getAbilityEffects = async () => {
      const abilityList = detail?.abilities ?? [];
      if (abilityList.length === 0) {
        setAbilityEffects([]);
        return;
      }
      setIsAbilityLoading(true);

      // CLUES.md: 2. Create a name and effect for each abilities.
      try {
        const abilityEffectResults = await Promise.all(
          abilityList.map(async (a) => {
            return {
              name: a.ability.name,
              short_effect: await getEnglishAbilityShortEffect(a.ability.url),
            };
          }),
        );
        if (!cancelled) {
          setAbilityEffects(abilityEffectResults);
        }
      } catch {
        // CLUES.md: 3. Error catching and final loading cleanup.
        if (!cancelled) {
          setAbilityEffects(
            abilityList.map((a) => ({
              name: a.ability.name,
              short_effect: "-",
            })),
          );
        }
      } finally {
        if (!cancelled) {
          setIsAbilityLoading(false);
        }
      }
    };

    // CLUES.md: 4. Call function and return cancelled to true.
    getAbilityEffects();
    return () => {
      cancelled = true;
    };
  }, [detail]);

  const findStat = (name) =>
    stats.find((s) => s.stat.name === name)?.base_stat ?? "-";

  return (
    <Card className={cardClassName}>
      <h3 className="pokemon-card-number">No. {paddedNumber}</h3>
      <Carousel
        imageFront={imageFront}
        imageBack={imageBack}
        pokemonName={pokemonName}
      />

      <Card.Body>
        <Card.Title className="pokemon-card-title">
          {pokemonName?.toUpperCase()}
        </Card.Title>
        <Card.Text as="div" className="pokemon-types-row">
          <Types types={types} />
        </Card.Text>
        <Card.Text as="div" className="mb-0">
          <Abilities
            isAbilityLoading={isAbilityLoading}
            abilityEffects={abilityEffects}
          />
        </Card.Text>
      </Card.Body>
      <StatsTable stats={stats} findStat={findStat} />
    </Card>
  );
}
