import styles from './collection-card.module.scss';

export const CollectionCard = ({img, title, artistName, artistImg, text}) => {
    return(
        <div className={styles.container}>
            <div className={styles['image-container']}>
                <img className={styles.nft} width="100%" height="auto" alt={title} src={img} />
                <img className={styles['artist-image']}  alt={artistName} src={artistImg} />
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles['artist-name-container']}>
                    <span>Por </span>
                    <span className={styles['artist-name']}>{artistName}</span>
                </div>
                <span className={styles.text}>{text}</span>
            </div>
        </div>
    )
}