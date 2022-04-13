import styles from './highlight.module.scss';

export const HighlightSection = ({ children }) => {
    return(
        <section className={styles['highlight-section']}>
            {children}
        </section>
    )
}