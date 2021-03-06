import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

import styles from "../../styles/column.module.scss";
import { Storyblok } from "../../lib/storyblok";

const TextColumn = ({ blok }) => {
  function createMarkup(storyblokHTML) {
    return {
      __html: Storyblok.richTextResolver.render(storyblokHTML),
    };
  }

  const RichTextField = ({ data }) => {
    return <div dangerouslySetInnerHTML={createMarkup(data)} />;
  };
  return (
    <div {...sbEditable(blok)} className={styles.textContainer}>
      <h2>{blok.columnTitle}</h2>
      <div>
        <RichTextField data={blok.textContent} />
      </div>
    </div>
  );
};

export default TextColumn;
