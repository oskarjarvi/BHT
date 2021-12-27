import React from "react";
import DynamicComponent from "../components/DynamicComponent";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/confirm.module.scss";

export default function Confirm() {
  return (
    <div className={styles.confirmWrapper}>
      <Image
        src={"/intresseanmalan.png"}
        layout={"fill"}
        objectFit={"cover"}
        alt={"backgroundImage"}
      />
      <h2 className={styles.confirmTitle}>Intresseanmälan</h2>
      <div className={styles.textContainer}>
        <h2>Tack för din anmälan</h2>
        <p>Vi hör av oss till dig inom kort</p>
      </div>
    </div>
  );
}
