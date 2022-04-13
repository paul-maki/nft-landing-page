import styles from './highlight.module.scss';

export const HighlightFooter = ({title, artistName, artistPic}) => {
    return(
        <footer className={styles.footer}>
            <img alt={artistName} height="50" width="50" src={artistPic}/>
            <div className={styles.info}>
                <span className={styles.title}>{title}</span>
                <span className={styles['artist-name']}>{artistName}</span>
            </div>
        </footer>
    )
}