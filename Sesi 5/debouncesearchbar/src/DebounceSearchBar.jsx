import { useState, useEffect } from "react";
const jsonplaceholder = `https://jsonplaceholder.typicode.com/users`

const DebounceSearchBar = () => {
  const [query, setQuery] = useState("")
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const timeoutId = setTimeout(async () => {
      const searchText = query.trim()
      const url = searchText ?
      `${jsonplaceholder}?name_like=${encodeURIComponent(searchText)}`
        : `${jsonplaceholder}`

      const response = await fetch(url)
      const data = await response.json()
      setUsers(data)
    }, 500);

    return () => clearTimeout(timeoutId)
  }, [query])

  return (
    <main className="container">
      <h1>Debounce Search Bar</h1>
      <input
        type="text"
        value={query}
        placeholder="search name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </main>
  );
};
export default DebounceSearchBar;

// Goal:
// • stores what the user types
// • waits a little before searching
// • shows the fetched result

// PSEUDOCODE:
// component DebounceSearchBar
//   create state for search text
//   create state for fetched users

//   useEffect runs when search text changes
//     start a timer
//       when timer finishes
//         fetch from API using search text
//         convert response to data
//         store data in users state

//     cleanup
//       cancel previous timer

//   return UI
//     title
//     controlled input
//       value comes from search state
//       onChange updates search state
//     results area

// Todo List: Step By Step.
// 1. Make a component: Start with the data that changes.
// 2. Add state for input text: Make the input controlled.
// 3. Add state for search result: Add effect for search text.
// 4. Connect the input to state: Put a timer in the effect.
// 5. Watch the input with an effect: Return cleanup function.
// 6. Delay search inside effect: Do the fetch after the wait.
// 7. Clean up the old delay: Store the response in state.
// 8. Fetch data: Render the result simply.
