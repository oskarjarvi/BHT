import React from "react";
import Link from "next/link";
import styles from "../../../styles/navLinks.module.scss";
import { NavLink } from "./NavLink";

export const NavLinks = ({ filteredLinks, links, dropdowns, setMenuClose }) => {
  return (
    <>
      {filteredLinks.length &&
        filteredLinks.map((item, i) => (
          <NavLink
            key={i}
            href={item.real_path}
            name={item.name}
            setMenuClose={setMenuClose}
          />
        ))}
      {dropdowns.length &&
        dropdowns.map((dropdownItem, index) => (
          <NavLink
            key={index}
            name={dropdownItem.name}
            slug={dropdownItem.slug}
          >
            <ul key={index}>
              {links
                .filter((item) => item.parent_id == dropdownItem.id)
                .map((link, index) => (
                  <li key={index}>
                    <NavLink
                      href={link.real_path}
                      name={link.name}
                      setMenuClose={setMenuClose}
                    />
                  </li>
                ))}
            </ul>
          </NavLink>
        ))}
    </>
  );
};
