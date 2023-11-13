import React, { useState } from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../../styles/form.module.scss";
import FormInput from "./FormInput";
import emailjs from "emailjs-com";
import { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
const Form = ({ blok }) => {
  const router = useRouter();

  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const fieldChanged = (fieldId, value) => {
    setValues((currentValues) => {
      currentValues[fieldId] = value;
      return currentValues;
    });
  };
  const submitForm = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        e.target,
        process.env.USER_ID
      )
      .then(
        () => router.push("/confirm"),
        () => {
          setLoading(false);
          alert(
            "Något gick fel med intresseanmälan, var god försök igen om en stund"
          );
        }
      );
  };

  return (
    <div
      {...sbEditable(blok)}
      className={styles.formContainer}
      style={{ backgroundImage: `url(${blok.backgroundImage.filename})` }}
    >
      <h1>{blok.form_name}</h1>
      <span className={styles.formDescription}>{blok.formDescription}</span>
      <form onSubmit={submitForm}>
        {blok.fields.map((item, index) => (
          <FormInput
            key={index}
            blok={item}
            value={values[item.name]}
            fieldChanged={fieldChanged}
          />
        ))}
        <button type="submit" className={styles.submitButton}>
          {loading ? <ClipLoader /> : "Anmäl"}
        </button>
      </form>
    </div>
  );
};

export default Form;
