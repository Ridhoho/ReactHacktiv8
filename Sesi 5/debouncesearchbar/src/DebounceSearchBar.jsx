// import { useEffect, useState } from "react";

const DebounceSearchBar = () => {

  return (
    <main className="container">
      <h1>Debounce Search Bar</h1>
      <input

      />
      <pre></pre>
    </main>
  );
};

export default DebounceSearchBar;

// Build a search bar that:
// • stores what the user types
// • waits a little before searching
// • shows the fetched result
// Todo List: Step By Step

// 1. Make a component: Start with the data that changes.
// Clue: one is user input, one is returned data.

// 2. Add state for input text: Make the input controlled.
// Clue: React should own its value.

// 3. Add state for search result: Add effect for search text.
// Clue: the effect should care about one main dependency.

// 4. Connect the input to state: Put a timer in the effect.
// Clue: the action should happen after typing pauses.

// 5. Watch the input with an effect: Return cleanup function.
// Clue: older timers should not keep running.

// 6. Delay search inside effect: Do the fetch after the wait.
// Clue: use the latest search text.

// 7. Clean up the old delay: Store the response in state.
// Clue: updating state should update the UI.

// 8. Fetch data: Render the result simply.
// Clue: simple is better than pretty at first.














// EXAMPLE AND ANSWER IS BELOW



// import { useEffect, useState } from "react";

// const DebounceSearchBar = () => {
//   const [query, setQuery] = useState("");
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const timeoutId = setTimeout(async () => {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/users?q=${query}`,
//       );
//       const data = await response.json();
//       setUsers(data);
//     }, 500);

//     return () => clearTimeout(timeoutId);
//   }, [query]);

//   return (
//     <main className="container">
//       <h1>Debounce Search Bar</h1>
//       <input
//         type="text"
//         value={query}
//         placeholder="Search user"
//         onChange={(event) => setQuery(event.target.value)}
//       />
//       <pre>{JSON.stringify(users, null, 2)}</pre>
//     </main>
//   );
// };

// export default DebounceSearchBar;



// STARTING CODE

// import { useEffect, useState } from "react";

// const DebounceSearchBar = () => {

//   return (
//     <main className="container">
//       <h1>Debounce Search Bar</h1>
//       <input

//       />
//       <pre></pre>
//     </main>
//   );
// };

// export default DebounceSearchBar;