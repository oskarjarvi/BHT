import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/navLinks.module.scss";

import { useState } from "react";
import useWindowSize from "../../../utils/hooks";

export const NavLink = ({ children, href, name, slug, setMenuClose }) => {
  const router = useRouter();
  const [dropdownVisible, setDropdownVisisble] = useState(false);
  const size = useWindowSize();

  const handleOnClick = () => {
    if (size.width <= 960) {
      setMenuClose();
    }
    setDropdownVisisble(false);
  };

  if (children) {
    return (
      <div
        onClick={() => setDropdownVisisble(!dropdownVisible)}
        className={`${styles.navLink} ${styles.dropdownToggle} ${
          dropdownVisible ? styles.visible : ""
        }`}
      >
        <p
          className={`${styles.navLink} ${
            router.asPath.includes(slug) ? styles.active : ""
          }`}
        >
          {name}
        </p>
        <div
          className={dropdownVisible ? styles.visibleDropDown : styles.dropdown}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <Link href={href} passHref>
      <a
        className={`${styles.navLink} ${
          router.asPath == href ? styles.active : ""
        }`}
        onClick={() => handleOnClick()}
      >
        {name}
      </a>
    </Link>
  );
};
