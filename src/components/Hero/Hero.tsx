"use client";
import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import styles from "./hero.module.css";
import Image from "next/image";
import Carousel from "@/assets/logos/carousel";
const Hero = () => {
  const [arr, setArr] = useState([
    {
      id: 1,
      name: "FoodName",
      src: "/image.webp",
    },
    {
      id: 2,
      name: "FoodName1",
      src: "/img3.jpg",
    },
    {
      id: 3,
      name: "FoodName2",
      src: "/img2.jpg",
    },
  ]);
  const [id, setId] = useState(arr[0].id);
  const next = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        let intId = arr[i + 1]?.id || arr[0]?.id;
        setId(intId);
      }
    }
  };
  const prev = () => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id == id) {
        let intId = arr[i - 1]?.id || arr.slice(-1)[0]?.id;
        setId(intId);
      }
    }
  };
  return (
    <div className={`${styles.container}`}>
      <Navbar />
      <div className={`${styles.hero}`}>
        <div className={`${styles.left}`}>
          <h1 className={`${styles.main}`}>Food</h1>
          <h2 className={`${styles.title}`}>
            Discover Restaurant & Delicious Food
          </h2>
          <div className={`${styles.searchContainer}`}>
            <input type="text" placeholder="search restaurant, food" />
            <div>
              <button>Go</button>
            </div>
          </div>
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.imgContainer}`}>
            {arr.map(
            (e) =>
              e.id === id && (
                <Image
                  className={`${styles.anime}`}
                  key={e.id}
                  src={e.src}
                  alt="food"
                  width={1000}
                  height={1000}
                />
              )
          )}
          </div>
          
          <div className={`${styles.buttons}`}>
            <Carousel prev={prev} next={next} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
