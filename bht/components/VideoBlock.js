import { sbEditable } from "@storyblok/storyblok-editable";
import { Storyblok } from "../lib/storyblok";
import styles from '../styles/videoBlock.module.scss'
const VideoBlock = ({ blok }) => {
    return (
        <div {...sbEditable(blok)}>
            <video className={styles.video} controls>
                <source src={blok.video.filename} type={'video/mp4'} />
            </video>
        </div>
    )
}
export default VideoBlock;