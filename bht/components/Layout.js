import Navbar from './navbar'
import Footer from './footer'
import { useState, useEffect } from 'react';
import Storyblok, { useStoryblok } from "../lib/storyblok";


export default function Layout({ children }) {
    const [dataLinks, setDataLinks] = useState([])

    const fetchData = async () => {
        let links = [];
        let { data } = await Storyblok.get(`cdn/links`);

        Object.keys(data.links).forEach((linkKey) => {
            if (data.links[linkKey].slug === "home" || data.links[linkKey].slug === "kurser" || data.links[linkKey].parent_id === 87298077) {
                return;
            }
            else {
                links.push(data.links[linkKey])
            }

        })
        setDataLinks(links)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <Navbar links={dataLinks} />
            <main>{children}</main>
        </>
    )
}