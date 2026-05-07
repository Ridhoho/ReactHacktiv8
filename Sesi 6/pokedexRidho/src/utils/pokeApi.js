export const POKEAPI_PAGE_URL =
  "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0";
export const POKEAPI_ALL_URL =
  "https://pokeapi.co/api/v2/pokemon/?limit=1300&offset=0";

export async function fetchPokemonDetail(pokemon) {
  const response = await fetch(pokemon.url);
  const data = await response.json();
  return { ...pokemon, detail: data };
};

export async function getEnglishAbilityShortEffect(url) {
  const response = await fetch(url);
  const data = await response.json();
  const englishEffect = data.effect_entries?.find(
    (entry) => entry.language.name === "en",
  );
  return englishEffect?.short_effect ?? "-";
}
