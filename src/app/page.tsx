import GooglePlay from "@/assets/logos/googlePlay";
import { FoodCard } from "@/components/FoodCard/foodCard";
import FoodCard2 from "@/components/FoodCard2/foodCard2";
import Hero from "@/components/Hero/Hero";
import { SeeMore } from "@/components/SeeMore/seeMore";
import styles from "@/styles/page.module.css";
import Image from "next/image";
import PlayStore from "./../assets/logos/playStore";
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
      <div className={`${styles.bookingSection}`}>
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
      <div className={`${styles.foodsSection}`}>
        <div className={`${styles.foodsMain}`}>
          <h2>Explore Our Foods</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat
            metus id amet.
          </p>
        </div>
        <div className={`${styles.foodCardContainer}`}>
          <FoodCard2 />
          <FoodCard2 />
          <FoodCard2 />
          <FoodCard2 />
          <FoodCard2 />
          <FoodCard2 />
        </div>
      </div>
      <div className={`${styles.downloadSection}`}>
        <div className={`${styles.downloadSectionLeft}`}>
          <div className={`${styles.downloadSectionRightMain}`}>
            <div></div>
            <h2>Download app for Exciting Deals</h2>
          </div>
          <p className={`${styles.p}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est,
            adipiscing cursus auctor eget sed phasellus senectus. Ut tellus
            donec vestibulum tristique leo bibendum in a, tincidunt.{" "}
          </p>
          <div className={`${styles.downloadSectionDownloadContainer}`}>
            <div className={`${styles.downloadSectionDownload}`}>
              <GooglePlay />
              <div className={`${styles.downloadSectionMain}`}>
                <p className={`${styles.downloadSectionMainFirst}`}>
                  GET IT ON
                </p>
                <p className={`${styles.downloadSectionMainLast}`}>
                  Google Play
                </p>
              </div>
            </div>
            <div className={`${styles.downloadSectionDownload}`}>
              <PlayStore />
              <div className={`${styles.downloadSectionMain}`}>
                <p className={`${styles.downloadSectionMainFirst}`}>
                  Download on the
                </p>
                <p className={`${styles.downloadSectionMainLast}`}>App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.downloadSectionLeft}`}>
          <Image
            className={`${styles.downloadSectionLeftPhone}`}
            src={"/phone.png"}
            width={1000}
            height={1000}
            alt={""}
          />
          <Image
            className={`${styles.downloadSectionLeftLettuce}`}
            src={"/bookingRightLettuce.png"}
            width={1000}
            height={1000}
            alt={""}
          />
        </div>
      </div>
    </>
  );
}
