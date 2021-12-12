import React from "react";
import DynamicComponent from "./DynamicComponent";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from '../styles/grid.module.scss'
const Grid = ({ blok }) => {
    return (
        <div {...sbEditable(blok)} className={styles.wrapper}>
            <h1>{blok.title}</h1>
            <div className={styles.gridContainer}>
                {blok.columns.map((item, index) => <DynamicComponent key={index} blok={item} />)}

            </div>
        </div>
    );
};

export default Grid;