# ROUTERLAMPIRAN
**https://reactrouter.com/start/declarative/installation**

**https://www.kode.id/courses/take/copy-of-private-gunawan-react-and-react-native-basics/texts/73944071-lampiran-sesi-9**

## Step 1: Connect React Router and Create First Routes for About Page

- In the file that renders `<App />`, wrap the app with the router component that lets React Router use the browser URL
- In `App.tsx`:
- Keep <Navbar> outside route-matching area so it is visible on every page
- Create a route for <Home> and <About>
- <About> is the parent route to <AboutCompany />  and <AboutMe />
- Put Link and Outlet inside `About.tsx` where child pages should appear

## Step 2: Build The Navbar

- In `Navbar.tsx`:
- Use React Router navigation links, not normal anchor tags.
- Match the text: `Home | About Us | Members | Items |`.
- The link destination must match a route path.

## Step 3: Build Members Page

- In `App.tsx`:
- Create a route for <Members> and <MembersDetail>
- <Members> is the parent route to <MembersDetail />

- In `Members.tsx`:
- Import `members` from `data.ts`. 
- Map over each member to turn it into a Link. Add index parameter to avoid showing the `|` separator after the last member.
- Add an element at the end for the child route to appear.

- In `MembersDetail.tsx`:
- Import `members` from `data.ts`.
- Use the React Router Hook that reads dynamic route parameters
- Find the same member name inside members array
- If member does not exist, show a fallback message; otherwise, show member name and detail

## Step 4: Build Items Page

- In `App.tsx`:
- Create a route for <Items> and <ItemsDetail>
- <Items> is the parent route to <ItemsDetail />

- In `data.ts`:
- Store item data. Each item should have an id, name, and power
- Create Type Alias and Type Annotation for `items` array.
- Remember! URL Params are read as String, string ID make comparison simpler, otherwise you can use String() conversion.

- In `Items.tsx`:
- Import `items` from `data.ts`
- Use the React Router Hook that returns a function to let you navigate in the browser
- Map over each item to turn it into a table with <tr> and <td>
- Clicking `Show detail` should change the URL by using React Router Hook

- In `ItemsDetail.ts`:
- Import `items` from `data.ts`
- Use the React Router Hook that reads dynamic route parameters
- Find the same item id inside items array
- If item does not exist, show a fallback message; otherwise, show item name and power

## Step 5: Protect Items Route, Build Login Page And Logout Buttons

- In `App.tsx`:
- Create state for the user's login status
- Check login state, Use `/items` route's element to choose between showing <Items /> or redirecting to Login with React Router Redirect Component
- Create a route for <Login> and pass down the state setter so Login page can update login status
- Pass down the state and state setter to <Navbar /> so it can update login status

- In `Login.tsx`:
- Type the props so this page can receive login state setter from `App.tsx`. Add a TypeScript props type that says this prop is a React state setter for a boolean value, then use that type in the component parameter.
- Use the React Router Navigation Hook to move the user after login.
- Create a login handler that updates the login state to true, then sends the user to the Items page. Connect the login handler to the Login button.

- In `Navbar.tsx`:
- Type the props to receive login state and setter from `App.tsx`. Add a TypeScript props type that says this prop is a React state setter for a boolean value, then use that type in the component parameter.
- Use the React Router Navigation Hook to move the user after logout.
- Create a logout handler that updates the login state to false, then sends the user to the Home page.
- Check if login state is true, then create a Logout button and connect it with the logout handler.
