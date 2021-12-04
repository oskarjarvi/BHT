import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const FormInput = ({ blok, value, fieldChanged }) => (
    <div {...sbEditable(blok)}>
        <label htmlFor={blok._uid}>{blok.label}</label>
        <input
            type={blok.type}
            id={blok._uid}
            name={blok.name}
            value={value}
            onChange={e => fieldChanged(blok.name, e.target.value)}
        />
    </div>
);

export default FormInput;