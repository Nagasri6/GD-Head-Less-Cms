"use client";
import styles from "./page.module.css";
import { useCountUp } from "./useCountUp";

const statsData = [
  { value: 49, label: "Convenient Locations" },
  { value: 49, label: "Years of Trusted Dental Care" },
  { value: 200, label: "Dentists and Specialists", suffix: "+" },
];

export default function Stats() {
  return (
    <div className={styles.statsWrapper}>
      {statsData.map((item, index) => {
        const { ref, count } = useCountUp(item.value);

        return (
          <div key={index} ref={ref} className={styles.statItem}>
            <h3 className={styles.value}>
              {count}
              {item.suffix || ""}
            </h3>
            <p className={styles.label}>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}
