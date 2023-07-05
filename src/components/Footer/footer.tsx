import React from "react";
import styles from "./footer.module.css";
import Row from "@/assets/logos/row";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <Image
      src={'/footerLettuce.png'}
      alt={''}
      width={1000}
      height={1000}
      />
      <h2>Get notified about new amazing products</h2>
      <p className={`${styles.footerP}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, adipiscing cursus auctor eget sed phasellus senectus. </p>
      <div className={`${styles.inputContainer}`}>
        <input type="email" placeholder="E-mail" />
        <button><Row/></button>
      </div>
      <ul className={`${styles.ul}`}>
        <li>Product</li>
        <li>Company</li>
        <li>Learn More</li>
        <li>Get In Touch</li>
      </ul>
    </div>
  );
};

export default Footer;
