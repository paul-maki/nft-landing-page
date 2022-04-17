import styles from './highlight.module.scss';

export const BackgroundImage = () => {
    return (
        <div className={styles['background-image-container']}>
            <div className={styles['background-image']}></div>
        </div>
    )    
}