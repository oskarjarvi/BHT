import React from "react";
import Image from 'next/image'
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from '../styles/hero.module.scss';
import DynamicComponent from "./DynamicComponent";


const Hero = ({ blok }) => {

    return <div {...sbEditable(blok)} className={styles.heroContainer} style={{ backgroundImage: `url(${blok.Image.filename})` }}>
        {blok.logo.id ? <Image src={blok.logo.filename} alt={blok.alt} width={500} height={200}
            objectFit="contain" />
            : null}
        {blok.text !== '' ? <h1 className={styles.heroText}>{blok.text}</h1> : null}
        {
            blok.links.length ?
                <div className={styles.navLinkContainer}>
                    {blok.links.map((link, index) => <DynamicComponent key={index} blok={link} />)}
                </div>
                : null
        }
    </div>
};

export default Hero;
