import React from "react";
import Image from 'next/image'
import { sbEditable } from "@storyblok/storyblok-editable";

const CourseList = ({ blok }) => {
    let courseList = blok.list;

    return <div {...sbEditable(blok)} >
        {courseList.map((item, key) => <div key={key}>
            {item.title}
        </div>)}
    </div>;
};

export default CourseList;