import { items } from "./data";
import { Outlet, useNavigate } from "react-router";

export default function Items() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>Items page</h1>
      <p>Select an item to be shown</p>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Item</strong>
            </td>
            <td>
              <strong>Action</strong>
            </td>
          </tr>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>
                <button onClick={() => navigate(`/items/${item.id}`)}>
                  Show detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Outlet />
    </main>
  );
}
