import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/mobileNav.module.scss";
import { NavLinks } from "./Navlinks";

export const MobileNav = ({ filteredLinks, links, dropdowns }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Link href="/" passHref>
        <a>
          <Image
            src={"/navLogo.svg"}
            width={100}
            height={20}
            alt={"Bedas logo"}
            className={styles.navLogo}
            quality={100}
          />
        </a>
      </Link>
      <div
        className={`${styles.hamburger} ${menuOpen ? styles.active : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div />
        <div />
        <div />
      </div>
      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <NavLinks
          links={links}
          dropdowns={dropdowns}
          filteredLinks={filteredLinks}
          setMenuClose={() => setMenuOpen(false)}
        />
      </div>
    </>
  );
};
