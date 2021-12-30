import React from "react";
import DynamicComponent from "../components/DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import Image from "next/image";
import styles from "../styles/educationBlock.module.scss";
import { useRouter } from "next/router";

const EducationBlock = ({ blok }) => {
  const router = useRouter();
  let url = null;
  return (
    <div {...sbEditable(blok)} className={styles.educationsContainer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>{blok.title}</h2>
          <pre>{blok.educationList}</pre>
        </div>

        <div className={styles.certImagesContainer}>
          {blok.certImages.length &&
            blok.certImages.map((item, index) => {
              if (item.link.url !== "") {
                url = item.link.url;
              } else {
                url = "";
              }
              return (
                <Image
                  onClick={() => url && router.push(url)}
                  key={index}
                  height={280}
                  width={200}
                  src={item.image.filename}
                  alt={"certification Image"}
                  quality={100}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default EducationBlock;
