export default function Abilities({ isAbilityLoading, abilityEffects }) {
  
  if (isAbilityLoading) {
    return <div>Loading abilities...</div>;
  }

  if (abilityEffects.length === 0) {
    return <div>-</div>;
  }

  return (
    <div>
      {abilityEffects.map((ability, index) => (
        <div
          key={ability.name}
          className={`pokemon-ability-card ${index === 0 ? 'pokemon-ability-card-first' : ''}`}
        >
          <strong className="pokemon-ability-name">{ability.name}</strong>
          {ability.short_effect}
        </div>
      ))}
    </div>
  );
}
