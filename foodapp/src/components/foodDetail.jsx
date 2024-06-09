import { useEffect, useState } from "react";
import styles from "./foodDetail.module.css";
import ItemList from "./itemList";
export default function FoodDetail({ foodId }) {
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const apiKey = "f992642d17134fc0a51a0caa90a89647";
  const [food, setFood] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${apiKey}`);
      const data = await res.json();
      setFood(data);
      setLoaded(true);
      console.log(data);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.card}>
        <h1 className={styles.name}>{food.title}</h1>
        <img className={styles.image} src={food.image} />
        <div className={styles.details}>
          <span>
            <strong>Minutes: {food.readyInMinutes}</strong>
          </span>
          <span>Serves: {food.servings}</span>
          <span>{food.vegiterian ? "Vegiterian" : "Non-Vegiterian"}</span>
          <span>{food.vegan ? "Vegan" : ""}</span>
        </div>
        <div>
          <span>$ {food.pricePerServing / 100} per servings</span>
        </div>
        <div className={styles.instructions}>
          <h2>Ingredients</h2>
          {loaded ? <ItemList food={food} /> : <p>Loading instructions...</p>}

          <h2>Instructions</h2>
          <ol>
            {loaded ? (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            ) : (
              <p>Loading instructions...</p>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
