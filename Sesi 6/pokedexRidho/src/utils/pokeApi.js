export const POKEAPI_PAGE_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0';
export const POKEAPI_ALL_URL = 'https://pokeapi.co/api/v2/pokemon/?limit=1300&offset=0';

export const fetchPokemonDetail = async (pokemon) => {
  const response = await fetch(pokemon.url);
  const detail = await response.json();
  return { ...pokemon, detail };
};

export async function getEnglishAbilityShortEffect(url) {
  const response = await fetch(url);
  const data = await response.json();
  const englishEffect = data.effect_entries?.find((entry) => entry.language.name === 'en');
  return englishEffect?.short_effect ?? '-';
}
