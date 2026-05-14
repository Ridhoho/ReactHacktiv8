# ROUTERLAMPIRAN
**https://reactrouter.com/start/declarative/installation**

**https://www.kode.id/courses/take/copy-of-private-gunawan-react-and-react-native-basics/texts/73944071-lampiran-sesi-9**

## Step 1: Connect React Router and Create First Routes for About Page

- In the file that renders `<App />`, wrap the app with the router component that lets React Router use the browser URL
- In `App.tsx`:
- Keep <Navbar> outside route-matching area so its visible on every page
- Create a route for <Home> and <About>
- <About> is the parent route to <AboutCompany />  and <AboutMe />
- Put Link and Outlet inside `About.tsx` where child pages should appear

## Step 2: Build The Navbar

- In `Navbar.tsx`:
- Use React Router navigation links, not normal anchor tags.
- Match the text: `Home | About Us | Members | Items |`.
- The link destination must match a route path.

## Step 3: Add Members Dynamic Routes

- Create a route for <Members> and <MembersDetail>
- <Members> is the parent route to <MembersDetail /> with path to "member"

- Use `Data.ts` for members. In `Members.tsx`:
- Map over each member to turn it into a Link. Add index parameter to avoid showing the `|` separator after the last member.
- Add an element at the end for the child route to appear.

- In `MemberDetail.tsx`:
- 

## Step 4: Add Items Dynamic Routes

- Store item data in one shared data file.
- Each item should have an id, name, and power.
- The Items page should show a table.
- Clicking `Show detail` should change the URL.
- The detail page should read the item id from the URL and find the matching item.

Target paths:

- `/items/1`
- `/items/2`
- `/items/3`

Check yourself:

- Why are URL params usually strings?
- Why is one shared data file better than copying the same array into two components?

## Step 5: Protect The Items Route

- Put login state in the component that owns the routes.
- If the user is not logged in and tries to visit Items, redirect to Login.
- If the user is logged in, show the Items page.

Target behavior:

- Clicking Items while logged out goes to `/login`.
- Clicking Login goes to `/items`.

Check yourself:

- Which React Router component redirects during render?
- Why should login state not live only inside the Login page?

## Step 6: Login And Logout Buttons

- The Login button should set login state to true and then navigate to Items.
- The Logout button should only appear when logged in.
- The Logout button should return to Home and set login state to false.
- Use button elements for login/logout because they change state.

Check yourself:

- When do you use a navigation hook instead of a link?
- Why can logout accidentally redirect to Login if you update the login state while standing on a protected route?

## Step 7: Match The Simple GIF Styling

- Keep the page plain: white background, black text, basic browser-style links.
- Add left spacing to the navbar and page content.
- Add a thin horizontal line below the navbar.
- Use large headings for page titles.
- Use simple table spacing for Items.

Check yourself:

- Which styling belongs globally?
- Which styling belongs to repeated elements like `nav`, `main`, and `table`?

## Final Self-Test

Try these flows:

1. Home loads at `/`.
2. About links show nested content.
3. Member links change the URL and show the selected member.
4. Items redirects to Login when logged out.
5. Login sends you to Items.
6. Item buttons change the URL and show item power.
7. Logout returns to Home and hides the Logout button.
