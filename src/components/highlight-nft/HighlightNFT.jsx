import { HighlightFooter } from "./HighlightFooter";
import styles from './highlight.module.scss';

export const HighlightNFT = ({img, title, artistName, artistPic}) => {
    return (
        <div className={styles['highlight-container']}>
            <img className={styles.image} alt={title} height="auto" width="100%" src={img} />
            <HighlightFooter title={title} artistName={artistName} artistPic={artistPic} />
        </div>
    )
}