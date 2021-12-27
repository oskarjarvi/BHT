import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import Link from "next/link";
import styles from "../styles/navButton.module.scss";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

const NavigationButton = ({ blok }) => {
  if (blok.link.url.includes("mailto")) {
    return (
      <div
        className={blok.size == "small" ? styles.smallNavLink : styles.navLink}
      >
        <a href={blok.link.url}>
          <p>{blok.name}</p>
        </a>
      </div>
    );
  }
  return (
    <Link href={`/${blok.link.cached_url}`} passHref {...sbEditable(blok)}>
      <div
        className={blok.size == "small" ? styles.smallNavLink : styles.navLink}
      >
        <a>
          <p>{blok.name}</p>
        </a>
      </div>
    </Link>
  );
};

export default NavigationButton;
