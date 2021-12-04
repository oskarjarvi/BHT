import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.scss';
import Image from 'next/image'



export default function Navbar({ children, links }) {
    const [dropdownItems, setDropdownItems] = useState([])
    const [newLinks, setNewLinks] = useState([])
    const [dropdownVisible, setDropdownVisisble] = useState(false)

    useEffect(() => {
        let dropdownParent = links.length && links.filter((item) => item.is_folder)
        let filteredList = links.length && links.filter((item) => !item.is_folder && item.parent_id != 89193917)

        setNewLinks(filteredList)
        setDropdownItems(dropdownParent);
    }, [links])

    return (
        <>
            <nav className={styles.navbar}>
                <Link href="/" passHref>
                    <a>
                        <Image src={'/navLogo.svg'} width={150} height={30} alt={'Bedas logo'} className={styles.navLogo} />
                    </a>
                </Link>
                <div className={styles.rightContainer}>
                    {newLinks.length && newLinks.map((item, i) => <Link key={i} href={item.real_path}>
                        <a className={styles.navLink}>{item.name}</a></Link>)}
                    {dropdownItems.length && dropdownItems.map((dropdownItem, index) =>
                        <React.Fragment key={index}>
                            <div onClick={() => setDropdownVisisble(!dropdownVisible)} className={styles.dropdownToggle}>
                                <p className={styles.navLink}>{dropdownItem.name}</p>
                                <Image src={dropdownVisible ? '/up.svg' : '/down.svg'} width={20} height={20} alt={'dropdown icon'} />
                            </div>
                            <ul key={index} className={dropdownVisible ? styles.visibleDropDown : styles.dropdown}>
                                {links.filter((item) => item.parent_id == dropdownItem.id).map((link, index) => <li key={index}> <Link href={link.real_path}>{link.name}</Link></li>)}
                            </ul>
                        </React.Fragment>
                    )}
                </div>
            </nav>
        </>
    )
}