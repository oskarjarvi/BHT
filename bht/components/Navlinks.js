import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/navbar.module.scss';
import useWindowSize from '../utils/hooks';


export const NavLinks = ({ filteredLinks, links, dropdowns, setMenuClose }) => {
    const [dropdownVisible, setDropdownVisisble] = useState(false)
    const size = useWindowSize()

    const handleOnClick = () => {
        if (size <= 600) {
            setMenuClose()

        }
        setDropdownVisisble(false)
    }
    return (
        <>
            {
                filteredLinks.length && filteredLinks.map((item, i) => <Link key={i} href={item.real_path}>
                    <a className={styles.navLink} onClick={() => handleOnClick()}>{item.name}</a></Link>)
            }
            {
                dropdowns.length && dropdowns.map((dropdownItem, index) =>
                    <React.Fragment key={index}>
                        <div onClick={() => setDropdownVisisble(!dropdownVisible)} className={`${styles.dropdownToggle} ${dropdownVisible ? styles.visible : ''}`}>
                            <p className={styles.navLink}>{dropdownItem.name}</p>

                        </div>
                        <ul key={index} className={dropdownVisible ? styles.visibleDropDown : styles.dropdown}>
                            {links.filter((item) => item.parent_id == dropdownItem.id).map((link, index) => <li key={index}> <Link href={link.real_path} passHref>
                                <a onClick={() => handleOnClick()}>{link.name}</a>
                            </Link>
                            </li>)}
                        </ul>
                    </React.Fragment>
                )
            }
        </>
    )
}