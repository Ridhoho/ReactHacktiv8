# Pokedex Latihan - Clues Note

Work through the files in this order. Each section tells you **what** to do, **why** it matters, and gives you hints without giving you the full answer.

---

## 1. `src/utils/theme.js`

**What's wrong:** `STAT_ROWS` is an empty array `[]`. The stats table won't render anything.

**What to do:** Fill `STAT_ROWS` with an array of rows. Each row is an array of 2 cells. Each cell is an object with two keys: `label` (display text) and `key` (the stat name from the API).

The 6 stats to show in 3 rows of 2:

- Row 1: HP + Speed
- Row 2: Attack + SP-Attack
- Row 3: Defense + SP-Defense

**Hint:** The API stat names (used as `key`) are: `'hp'`, `'speed'`, `'attack'`, `'special-attack'`, `'defense'`, `'special-defense'`

**Shape to follow:**

```js
export const STAT_ROWS = [
  [
    { label: "HP", key: "hp" },
    { label: "Speed", key: "speed" },
  ],
  // ... two more rows
];
```

---

## 2. `src/utils/pokeApi.js`

The URLs are already correct. The two functions need to be implemented.

### `fetchPokemonDetail(pokemon)`

**What it receives:** A single pokemon object from the API list. It has a `name` and a `url` (e.g. `https://pokeapi.co/api/v2/pokemon/1/`).

**What it should return:** The same pokemon object but with a new `detail` property containing the full pokemon data from the API.

**Steps:**

1. `fetch(pokemon.url)` — call the detail URL
2. `await response.json()` — parse the response
3. Return `{ ...pokemon, detail: data }` — spread the original object, add detail

### `getEnglishAbilityShortEffect(url)`

**What it receives:** A URL string for an ability (e.g. `https://pokeapi.co/api/v2/ability/65/`).

**What it should return:** A short English description string of the ability.

**Steps:**

1. `fetch(url)` and parse the JSON
2. The response has `data.effect_entries` — an array of effect objects
3. Each entry has a `language.name` field — you need the one where it equals `'en'`
4. Use `.find()` to locate the English entry
5. Return `englishEntry?.short_effect ?? '-'` (the `??` means "if this is null/undefined, use `'-'` instead")

---

## 3. `src/components/Header.jsx`

**What's wrong:** The component accepts no props. The title has no color, and the search input doesn't do anything.

**What to do:** Accept 3 props: `{ titleColor, searchInput, setSearchInput }`

- Add inline style to `h1` element using `titleColor` props as the color.
- Add two attributes to the `Form.Control` element: one to read its value from `searchInput`, and one to update that value using `setSearchInput`.

**How it works:** `setSearchInput` is a state setter from the parent (`App.jsx`). Every keystroke updates the state in App, which triggers the search effect.

---

## 4. `src/components/Pagination.jsx`

**What's wrong:** The buttons accept no props, so they can't call any functions or disable themselves.

**What to do:** Accept 4 props: `{ previous, next, handlePrevious, handleNext }`

- Add two attributes to each `Button` element:
- `handlePrevious` and `handleNext` are the page-changing functions. Run the correct function when each button is clicked.
- `previous` and `next` are URLs. There is no previous/next page when the URL is null. Make each button disabled when its matching URL is null.

---

## 5. `src/components/Carousel.jsx`

**What's wrong:** The two `<img>` tags have empty `src` and `alt`.

**What to do:** Accept props `{ imageFront, imageBack, pokemonName }`.
Use `imageFront` on the first `img` element and `imageBack` on the second `img` element. `alt` attribute is used as a description for `pokemonName`.

---

## 6. `src/components/Types.jsx`

**What's wrong:** The component does not render the Pokemon type data yet.

**What to do:** Accept `{ types }` prop. Map over the `types` array and render a `<span>` for each type.

**Key info about the data shape:** You want to take into consideration each item type name. Each item in `types` looks like:

```js
{ slot: 1, type: { name: 'fire', url: '...' } }
```

Check the length of types to be above 0 using ternary operator.

If true, Map over types with `item` as the parameter.

Return a `span` element and add a `key` attribute.

Refer to `import { TYPE_CLASSNAMES } from '../utils/theme'` and `App.css` for className styling. Fill the blank spaces in `${     || ''}`.

```js
className={`pokemon-type-badge ${     || ''}`}
```

Fill `span` element with the correct text referring to the item type name.

If false, empty `span` element.

---

## 7. `src/components/Abilities.jsx`

**What's wrong:** Hardcoded placeholder, no real data, no loading state.

**What to do:** Accept `{ isAbilityLoading, abilityEffects }` props.

**Logic to implement:**

1. Check if `isAbilityLoading` is loading, return `<div>Loading abilities...</div>`.

2. Check if `abilityEffects` length is equal to 0, return empty `<div>`.

3. Otherwise, Map over `abilityEffects` and render each ability using `ability` and `index` as parameter.

Each item in `abilityEffects` has a `name` and a `short_effect` string.

**Hint for structure:**

```jsx
<div
  key={     }
  className={`pokemon-ability-card ${     }`}
>
  <strong className="pokemon-ability-name">{     }</strong>
  {     }
</div>
```

Inside `<div className={pokemon-ability-card ${     }}>` fill in the blank spaces to check if index is equal to 0 using ternary operator, set `"pokemon-ability-card-first"` as True, and empty `""` as False.
Fill the blank spaces in `key` attribute, `<strong>` and before the closing `</div>` element with the correct `name` and a `short_effect` string.

---

## 8. `src/components/StatsTable.jsx`

**What's wrong:** The `<tbody>` is empty, no real data.

**What to do:** Accept `{ stats, findStat }` props.

**Logic:**

1. If stats length is equal to 0, `return null` (don't render the table at all)
2. Inside `<tbody>` Map over `STAT_ROWS` to render each row, use `row` as parameter. Insert `<tr>` element to each row parameter.
3. Inside each row, Map over the cell in that row, use `cell` as parameter.
4. Fill in the blank spaces. Refer to `STAT_ROWS` and `STAT_CLASSNAMES` from utils/theme for more hint.
5. `findStat` is a function passed as a prop from `PokeCard`. It will receive the `key` value. It looks up the base stat value by stat name. For now `findStat` is not yet usable.

**Hint for row and cell:**

```jsx
<tr key={     }>
  {     
    <td key={     } className={     }>
      <strong>
        {     }: {findStat(     )}
      </strong>
    </td>
  }
</tr>
```
---

## 9. `src/PokeCard.jsx`

This is the most complex component. Work on it after the helper components above are done.

**What's wrong:** No props, no state, hardcoded values.

### Step 1 — Accept props and extract data

Accept `{ stats, findStat }` props.

```jsx
  const detail = pokemon?.detail;          // full pokemon data
  const types = detail?.types ?? [];       // array of type objects
  const stats = detail?.stats ?? [];       // array of stat objects
```

### Step 2 — State for abilities

```jsx
const [abilityEffects, setAbilityEffects] = useState([]);
const [isAbilityLoading, setIsAbilityLoading] = useState(false);
```

### Step 3 — Derived values

```jsx
const paddedNumber = String(number).padStart(3, "0"); // 1 → "001"
const imageFront = detail?.sprites?.front_default;
const imageBack = detail?.sprites?.back_default;
const pokemonName = pokemon?.name;
```

### Step 4 — Card class name (type coloring)

The card background color is set by CSS classes. Use `PRIMARY_TYPE_CLASSNAMES` and `SECONDARY_TYPE_CLASSNAMES` from `./utils/theme`. Build the class string:

```jsx
const cardClassName = [
  "pokemon-card",
  types[0] ? PRIMARY_TYPE_CLASSNAMES[types[0].type.name] : "",
  types[1]
    ? `pokemon-card-dual ${SECONDARY_TYPE_CLASSNAMES[types[1].type.name]}`
    : "",
]
  .filter(Boolean)
  .join(" ");
```

### Step 5 — useEffect for ability fetching

This effect runs whenever `detail` changes (i.e., when a new pokemon loads). Set `detail` as the dependancy array.

1. Start by getting the abilities array from `detail`.
The `cancelled` flag prevents updating state after the component unmounts (a common React pattern to avoid memory leaks).

**Data Flow**: The Pokemon list API gives each Pokemon a URL. Refer to `pokeApi.js`. That URL is used to fetch the full Pokemon data, then attach that full data as a new `detail` property. Later on `App.jsx` saves the detailed Pokemon objects as props and passes them into `PokeCard`, so it can read `pokemon.detail`. Check https://pokeapi.co/api/v2/pokemon/{id}

 - Create a `cancelled` variable, set it to false.
 - Create a async arrow function named `getAbilityEffects`.
 - Create `abilityList` variable and use nullish coalescing to check if abilities from `detail` is not ready yet, use an empty array.
 - If `abilityList` lenght is 0, clear the ability effects and stop.
 - Then turn on ability loading to true.

2. Create a name and effect for each abilities.
 - Inside Try block, create a `abilityEffectResults` variable.
 - You need to map through every ability and await all promises until every short effect requests are finished.
 - For each ability, return an object with the ability name and the English short effect. Use a function from utils, check import code block for clue. Pass in ability URL into the function to get short effect.
 - If not `cancelled`, `setAbilityEffects(abilityEffectResults)`.

3. Error catching and final loading cleanup.
If fetching the ability effects fails, still show each ability name, but use "-" as its effect. Always stop the loading state at the end, as long as the request has not been cancelled.
 - Always check if not `cancelled`.
 - Inside the Catch block, wrap `setAbilityEffects` with a fallback array from `abilityList`.
 - Each fallback object should keep the ability name and use "-" for `short_effect`.
 - Inside the Finally block, turn off the ability loading state.

4. Call function and return cancelled to true.
Call the function so the ability effects start loading. In the cleanup, change `cancelled` to true so old requests cannot update the card.

### Step 6 - Find one stat value

Create an arrow function called `findStat` that receives a stat name.
Check https://pokeapi.co/api/v2/pokemon/{id} for guidance.
- Find the `stats` array for the stat object with the matching name.
- The stat name from the API is inside `stat.name`.
- If a matching stat is found, return its `base_stat` value.
- If no matching stat is found, return `"-"` instead.

### Step 7 — Update JSX

Pass all the props down to child components:

```jsx
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
      <Types
        types={types}
      />
    </Card.Text>
    <Card.Text as="div" className="mb-0">
      <Abilities
        isAbilityLoading={isAbilityLoading}
        abilityEffects={abilityEffects}
      />
    </Card.Text>
  </Card.Body>
  <StatsTable
    stats={stats}
    findStat={findStat}
  />
</Card>
```

---

## 10. `src/App.jsx`

This is the brain of the whole app. Save it for last.

### State variables to add

```jsx
const [pokemons, setPokemons] = useState([]); // current pokemon page (details)
const [allPokemons, setAllPokemons] = useState([]); // all 1300 names (search)
const [searchResults, setSearchResults] = useState([]); // search (details)
const [previous, setPrevious] = useState(null); // URL for previous page
const [next, setNext] = useState(null); // URL for next page
const [offset, setOffset] = useState(0); // how many pokemon we've passed
const [searchInput, setSearchInput] = useState(""); // current search text
const [debouncedSearch, setDebouncedSearch] = useState(''); // debouncing
const [titleColor, setTitleColor] = useState(TYPE_COLORS[0]); // title color
```

### Arrow Function: `getPokemons`

Fetches one page of pokemon and their details. `url` as parameter.

1. fetch(url) — if url is undefined, use `POKEAPI_PAGE_URL`
2. Parse JSON → data
3. data.results is an array of { name, url } objects. Use Promise.all to Map data.results and fetchPokemonDetail.
4. setPokemons(details)
5. setPrevious(data.previous)
6. setNext(data.next)

### Arrow Function: `getAllPokemons`

Fetches all 1300 pokemon names (no details — just names and URLs, for fast search).

```
1. use Try/Catch code block
1. fetch(POKEAPI_ALL_URL)
2. Parse JSON → data
3. setAllPokemons(data.results)
5. console error, provide string description and error.
```

### Arrow Function: `handleNext` and `handlePrevious`

```
handleNext:  if (!next) return;  →  getPokemons(next);  →  setOffset(prev => prev + 20)
handlePrev:  if (!previous) return;  →  getPokemons(previous);  →  setOffset(prev => prev - 20)
```

### Effect 1 — on mount (run once)
Empty dependency array run only once when component first renders.

```jsx
  useEffect(() => {
// eslint-disable-next-line react-hooks/set-state-in-effect
    getPokemons();
    getAllPokemons();
}, []);
```

### Effect 2 — debounce the search input

This delays the actual search by 300ms after the user stops typing (debouncing). Without this, a fetch would fire on every single keystroke.

- Use an effect that watches `searchInput`.
- Inside the effect, start a timer.
- When timer finishes, update `setDebouncedSearch` with `searchInput`.
- In the cleanup, cancel the previous timer.

**How it works:** Every time `searchInput` changes (i.e. user types), a timer starts. If the user types again before timer is up, the old timer is cancelled (via cleanup) and a new one starts. Only when the user pauses does `debouncedSearch` actually update — which then triggers Effect.

### Effect 3 — global search

Refer to `debouncedSearch` and `allPokemons` for this effect. It runs whenever either value changes.

1. Use `cancelled` flag (same pattern in PokeCard) to prevent stale state.
2. Create `runGlobalSearch` async arrow function.
3. Create `query` variable, trim and lowercase it.
4. If query is empty → setSearchResults([]) and return.

5. Create `matched` variable to Map, Filter and Slice `allPokemons`:
   - Map each pokemon (with its index+1 as number)

   - Filter each pokemon with:
   const paddedNumber = String(?.number).padStart(3, "0")
   Return pokemon name includes query OR paddedNumber includes query

   - Slice limit from 0 to 40 results.

6. Fetch details using Promise.all and use `matched` to Map over `fetchPokemonDetail`.
7. If not cancelled, `setSearchResults(details)`.
8. Call function and return cancelled to true.
9. Add two dependency array. Effect runs whenever Search or Pokemon change.

### Effect 4 — title color cycling

```jsx
useEffect(() => {
  const intervalId = setInterval(() => {
    const randomIndex = Math.floor(Math.random() * TYPE_COLORS.length);
    setTitleColor(TYPE_COLORS[randomIndex]);
  }, 3000);

  return () => clearInterval(intervalId);
}, []);
```

### Deciding what to render (search vs. pagination)

```jsx
const filteredPokemons = debouncedSearch
  ? searchResults.map((p) => ({ p, number: p.number }))
  : pokemons.map((p, i) => ({ p, number: offset + i + 1 }));
```

When searching: use `searchResults` (each item already has a `number` from the filter step).  
When not searching: use `pokemons` and calculate number from `offset + index + 1`.

### Update JSX

Pass props down to child components:

```jsx
<Header
  titleColor={titleColor}
  searchInput={searchInput}
  setSearchInput={setSearchInput}
/>
<Row xs={1} sm={2} md={3} lg={4} className="g-0">
  {filteredPokemons.map(({ p, number }) => (
    <Col key={p.name}>
      <PokeCard pokemon={p} number={number} />
    </Col>
  ))}
</Row>
<Pagination
  previous={previous}
  next={next}
  handlePrevious={handlePrevious}
  handleNext={handleNext}
/>
```

---

## Suggested Order to Implement

1. `utils/theme.js` — fill in `STAT_ROWS`
2. `utils/pokeApi.js` — implement the two functions
3. `Header.jsx` — props + controlled input
4. `Pagination.jsx` — props + disabled logic
5. `Carousel.jsx` — props + image src
6. `Types.jsx` — map types to badges
7. `Abilities.jsx` — loading state + map abilities
8. `StatsTable.jsx` — map STAT_ROWS + null guard
9. `PokeCard.jsx` — wire everything together
10. `App.jsx` — state, effects, fetching, search

Test after each step by running `npm run dev`.

---

## Quick Reference

| Concept                       | Reminder                                                                                                     |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `?.` (optional chaining)      | Safe way to access nested props. `detail?.types` returns `undefined` instead of crashing if `detail` is null |
| `?? '-'` (nullish coalescing) | If left side is null/undefined, use the right side value                                                     |
| `Promise.all([...])`          | Runs multiple async calls at the same time and waits for all of them                                         |
| `useEffect(() => {}, [])`     | The `[]` means "run only on mount". Put variables in the array to re-run when they change                    |
| `filter(Boolean)`             | Removes empty strings and falsy values from an array                                                         |
| `.padStart(3, "0")`           | Pads a string to length 3 with zeros: `"1"` → `"001"`                                                        |
