import styles from "./foodItem.module.css";
export default function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img src={food.image} alt="" className={styles.itemImage} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => setFoodId(food.id)}
        >
          View Reciepe
        </button>
      </div>
    </div>
  );
}
