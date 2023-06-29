'use client'
import React, { useState } from "react";
import styles from "./navbar.module.css";
import MainLogo from "@/assets/logos/Logo";
import UserToggle from "@/assets/logos/userToggle";
const Navbar = () => {
  const [open,setOpen]=useState(false)
  return (
    <nav className={`${styles.container}`}>
      <MainLogo />
      <ul className={`${styles.linkContainer}`}>
        <li className={`${styles.link}`}>Menu One</li>
        <li className={`${styles.link}`}>Menu Two</li>
        <li className={`${styles.link}`}>Menu Three</li>
        <li className={`${styles.link}`}>Menu Four</li>
      </ul>
      <div className={`${styles.user}`}>
        <p className={`${styles.mainText}`} onClick={()=>setOpen(!open)}>Profile <UserToggle/></p>
        <div className={`${open?`${styles.panel }`:`${styles.panel} ${styles.close}`}`}>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
          <p>lorem</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
