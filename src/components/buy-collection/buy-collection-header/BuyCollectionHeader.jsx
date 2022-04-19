import styles from './buy-collection-header.module.scss';

export const BuyCollectionHeader = ({artistImg, headerImg, title, artistName}) => {
    return (
        <div className={styles.header}>
            <div className={styles['image-container']}>
                <img alt="header" height="100%" width="100%" className={styles['header-image']} src={headerImg}/> 
                <img alt={artistName} className={styles['artist-image']} src={artistImg}/> 
            </div>
            <h1 className={styles.title}>{title}</h1>
            <span className={styles.subtitle}>Created by </span>
            <span className={styles['artist-name']}>{artistName}</span>
        </div>
    )
}