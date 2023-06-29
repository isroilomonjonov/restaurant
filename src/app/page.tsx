import Hero from "@/components/Hero/Hero";
import styles from'@/styles/page.module.css';
export default function Home() {
  return <>
      <Hero/>
      <section className={`${styles.someTopRestaurantSection}`}>
        <div>
          <div>

          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. Ut tellus donec vestibulum tristique leo bibendum in a, tincidunt. Volutpat metus id amet, nam hac magna accumsan. Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed.</p>
        </div>
      </section>
    </>;
}
