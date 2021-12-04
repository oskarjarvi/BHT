import React from "react";
import Image from 'next/image'
import { sbEditable } from "@storyblok/storyblok-editable";
import DynamicComponent from "./DynamicComponent";
import styles from "../styles/course.module.scss";


const Course = ({ blok }) => {

    return <div {...sbEditable(blok)} className={styles.course}>
        <div style={{
            backgroundImage: `url(${blok.image.filename})`,
        }} className={styles.courseHero}>
            <h1>{blok.title.toUpperCase()}</h1>
            <button>Anmälan</button>
        </div>
        <div className={styles.introContainer}>
            <pre className={styles.introText}>
                {blok.intro}
            </pre>
        </div>
        <div className={styles.descriptionContainer}>
            <span className={styles.descriptionText}>
                {blok.description}
            </span>
        </div>
        {blok.block.length ? blok.block.map((item, i) => <DynamicComponent blok={item} key={i} />) : null}
    </div>
};

export default Course;