import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/educationBlock.module.scss";
import { useRouter } from "next/router";

const EducationImage = ({ educationItem }) => {
  const [linkUrl, setLinkUrl] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (educationItem.link.url !== "") {
      setLinkUrl(educationItem.link.url);
    }
  }, [educationItem]);

  return (
    <Image
      onClick={() => linkUrl && router.push(linkUrl)}
      height={280}
      width={200}
      src={educationItem.image.filename}
      alt={"certification Image"}
      quality={100}
    />
  );
};

export default EducationImage;
