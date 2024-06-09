import Item from "./item";
export default function ItemList({ food }) {
  return (
    <div>
      {food.extendedIngredients.map((i) => (
        <Item item={i}></Item>
      ))}
    </div>
  );
}
