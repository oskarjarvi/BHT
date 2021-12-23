import { sbEditable } from "@storyblok/storyblok-editable";
import { Storyblok } from "../lib/storyblok";
import styles from "../styles/videoBlock.module.scss";
import { Wrapper } from "./Wrapper";
const VideoBlock = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} className={styles.videoContainer}>
      <Wrapper>
        <video className={styles.video} controls>
          <source src={blok.video.filename} type={"video/mp4"} />
        </video>
      </Wrapper>
    </div>
  );
};
export default VideoBlock;
