import React from "react";
import DynamicComponent from "../DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import Image from "next/image";
import styles from "../../styles/educationBlock.module.scss";
import { useRouter } from "next/router";
import EducationImage from "./EducationImage";

const EducationBlock = ({ blok }) => {
  const router = useRouter();

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
              return <EducationImage educationItem={item} key={index} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default EducationBlock;
