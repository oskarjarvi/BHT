import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../../styles/courseList.module.scss";
import NavigationButton from "../NavigationButton";
import { useSpring, animated } from "react-spring";

const CourseListItem = ({ blok }) => {
  const textProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });
  const navProps = useSpring({
    from: { transform: "translateY(-200%)" },
    to: { transform: "translateY(0%)" },
    config: { duration: 500 },
  });
  return (
    <div
      {...sbEditable(blok)}
      style={{ backgroundImage: `url(${blok.backgroundImage.filename})` }}
      className={styles.courseListItemContainer}
    >
      <animated.div style={textProps} className={styles.courseListText}>
        <h1>{blok.title}</h1>
        <h3>Pris: {blok.price}kr</h3>
        <h3>Datum: {blok.date.slice(0, -6)}</h3>
      </animated.div>
      <div style={{ overflowY: "hidden" }}>
        <animated.div style={navProps}>
          <NavigationButton
            blok={{
              name: "LÄS MER",
              size: "small",
              link: { cached_url: blok.link.cached_url },
            }}
          />
        </animated.div>
      </div>
    </div>
  );
};

export default CourseListItem;
