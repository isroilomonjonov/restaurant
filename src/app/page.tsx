import { FoodCard } from "@/components/FoodCard/foodCard";
import Hero from "@/components/Hero/Hero";
import { SeeMore } from "@/components/SeeMore/seeMore";
import styles from "@/styles/page.module.css";
import Image from "next/image";
const foodCardData = [
  {
    id: "1",
    name: "Fire Water",
    description:
      "we are all about we are all about to the fullest and all content dining out or in!dining out or in!",
    location: "New Market",
    img: "foodIMG.png",
  },
  {
    id: "2",
    name: "The Wonton",
    description:
      "we are all about we are all about to the fullest and all content dining out or in!dining out or in!",
    location: "Saheb Bazar",
    img: "burgerImg.png",
  },
];
export default function Home() {
  return (
    <>
      <Hero />
      <div className={`${styles.someTopRestaurantSection}`}>
        <div className={`${styles.firstDiv}`}>
          <div className={`${styles.first}`}>
            <div></div>
            <p>Some Top Restaurant For Dining In Or Take Away!</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
            metus id amet, nam hac magna accumsan. Nascetur ac tortor purus
            ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est, adipiscing cursus auctor eget sed.
          </p>
        </div>
        <div className={`${styles.foods}`}>
          {foodCardData.map((e) => (
            <FoodCard key={e.id} data={e} />
          ))}
          <SeeMore />
        </div>
      </div>
      <div className={`${styles.booking}`}>
        <Image
          className={`${styles.bookingLeftLettuce}`}
          width={1000}
          height={1000}
          src={"/bookingLeftLettuce.png"}
          alt="lettuce"
        />
        <div className={`${styles.bookingMain}`}>
          <div className={`${styles.bookingRedDiv}`}></div>
          <h2 className={`${styles.bookingMainTitle}`}>advance booking</h2>
          <div className={`${styles.bookingInputDiv}`}>
            <input placeholder="search restrurent" type="text" />
            <button>GO</button>
          </div>
        </div>
        <Image
          className={`${styles.bookingRightLettuce}`}
          width={1000}
          height={1000}
          src={"/bookingRightLettuce.png"}
          alt="lettuce"
        />
      </div>
    </>
  );
}
