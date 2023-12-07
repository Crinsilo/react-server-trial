import { useEffect, useState } from "react";
import styles from "./app.module.scss";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(1);
  }, [setCount]);

  return (
    <>
      <h2 className={styles.title}>My App</h2>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
      <p>count: {count}</p>
      {/* <p dangerouslySetInnerHTML={{ __html: "<p>something</p>" }} /> */}
    </>
  );
}
