import { useParams } from "react-router";
import { items } from "./data";

export default function ItemsDetail() {
  const { itemId } = useParams();
  const selectedItem = items.find((item) => item.id === itemId);

  if (!selectedItem) {
    return <p>Item Not Found</p>;
  }

  return (
    <>
      <h2>{selectedItem.name}</h2>
      <p>Power : {selectedItem.power}</p>
    </>
  );
}
