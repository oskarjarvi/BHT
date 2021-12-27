import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../../styles/textWithBackground.module.scss";
import { Storyblok } from "../../lib/storyblok";

import { useSpring, animated } from "react-spring";

const TextWithBackground = ({ blok }) => {
  const imgProps = useSpring({
    from: { transform: "scale(1)" },
    to: { transform: "scale(1.2)" },
    config: { duration: 10000 },
  });

  function createMarkup(storyblokHTML) {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  }

  const RichTextField = ({ data }) => {
    return <div dangerouslySetInnerHTML={createMarkup(data)} />;
  };

  return (
    <div className={styles.container} {...sbEditable(blok)}>
      <animated.div
        style={{
          ...imgProps,
          backgroundImage: `url(${blok.backgroundImage.filename})`,
        }}
        className={styles.backgroundImage}
      />
      {blok.title !== "" && <h1>{blok.title}</h1>}
      <div className={styles.textWrapper}>
        <pre className={styles.text}>
          <RichTextField data={blok.textContent} />
        </pre>
      </div>
    </div>
  );
};

export default TextWithBackground;
