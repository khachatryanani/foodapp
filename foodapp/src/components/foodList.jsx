import FoodItem from "./foodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((f) => (
        <FoodItem food={f} key={f.id} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
