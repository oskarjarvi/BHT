import { sbEditable } from "@storyblok/storyblok-editable";
import { Storyblok } from "../lib/storyblok";
import styles from '../styles/textBlock.module.scss'

const TextBlock = ({ blok }) => {
    function createMarkup(storyblokHTML) {
        return {
            __html: Storyblok.richTextResolver.render(storyblokHTML),
        }
    }

    const RichTextField = ({ data }) => {
        return <div dangerouslySetInnerHTML={createMarkup(data)} />
    }

    return (
        <div {...sbEditable(blok)} className={styles.textContainer} >
            <pre className={styles.text}>
                <RichTextField data={blok.text} />
            </pre>
        </div>
    )
}
export default TextBlock;