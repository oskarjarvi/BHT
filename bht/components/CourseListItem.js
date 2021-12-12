import React from "react";
import Image from 'next/image'
import { sbEditable } from "@storyblok/storyblok-editable";
import DynamicComponent from "./DynamicComponent";
import styles from '../styles/courseList.module.scss'
import NavigationLink from "./NavigationLink";

const CourseListItem = ({ blok }) => {

    return <div {...sbEditable(blok)} style={{ backgroundImage: `url(${blok.backgroundImage.filename})` }} className={styles.courseListItemContainer}>
        <h1>{blok.title}</h1>
        <div>
            <p>Pris: {blok.price}kr</p>
            <p>Datum: {blok.date.slice(0, -6)}</p>
        </div>

        <NavigationLink blok={{ name: 'LÄS MER', size: 'small', link: { cached_url: blok.link.cached_url } }} />
    </div>
};

export default CourseListItem;