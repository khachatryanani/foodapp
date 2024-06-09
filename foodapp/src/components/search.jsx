import { useEffect, useState } from "react";
const url = "https://api.spoonacular.com/recipes/complexSearch";
const apiKey = "f992642d17134fc0a51a0caa90a89647";
import styles from "./search.module.css";

export default function Search({ foodData, setData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${apiKey}`);
      const data = await res.json();
      setData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.search_container}>
      <input
        className={styles.input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </div>
  );
}
