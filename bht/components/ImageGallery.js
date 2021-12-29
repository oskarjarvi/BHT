/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { sbEditable } from "@storyblok/storyblok-editable";
import Modal from "react-modal";

import DynamicComponent from "./DynamicComponent";
import styles from "../styles/imageGallery.module.scss";
import Image from "next/image";
// import { useSpring, animated } from "react-spring";

Modal.setAppElement("#__next");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 600,
  },
  overlay: {
    zIndex: 5000,
    backgroundColor: "rgba(70, 70, 70, 0.5)",
  },
};
const ImageGallery = ({ blok }) => {
  let { title, images } = blok;
  const [imgSrc, setImgSrc] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const handleOnClick = (target) => {
    setModalOpen(true);
    setImgSrc(target.image.filename);
  };

  // const textProps = useSpring({
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   config: { duration: 1000 },
  // });
  return (
    <>
      <div
        {...sbEditable(blok)}
        className={`
          ${styles.imageGalleryContainer} ${title ? "" : styles.noPadding}
        `}
      >
        {title !== "" ? <h2>{title}</h2> : null}
        <div className={styles.imageGallery}>
          {images.length &&
            images.map((item, index) => (
              <div
                key={index}
                onClick={() => handleOnClick(item)}
                className={styles.image}
              >
                <Image
                  src={item.image.filename}
                  layout={"fill"}
                  objectFit={"cover"}
                  alt={"galleribild"}
                />
                <div className={styles.imageOverlay}>
                  <h2 className={styles.imageName}>{item.text}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
      >
        <div className={styles.modalContent}>
          <Image
            src={imgSrc}
            layout={"fill"}
            objectFit={"cover"}
            alt={"galleribild"}
            quality={100}
          />
        </div>
      </Modal>
    </>
  );
};

export default ImageGallery;
