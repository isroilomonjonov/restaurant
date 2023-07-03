import React from "react";
import styles from "./foodCard2.module.css";
import Image from "next/image";
const FoodCard2 = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.imgContainer}`}>
        <Image
          className={`${styles.imgContainer}`}
          src={"/foodCardMain.png"}
          width={1000}
          height={1000}
          alt="food"
        />
      </div>
      <div className={`${styles.textContainer}`}>
        <div className={`${styles.main}`}>
          <h3>Hand Sandwich</h3>
          <p>$10.25</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
          adipiscing.
        </p>
      </div>
    </div>
  );
};

export default FoodCard2;
