import styles from './collection.module.scss';
import { CollectionList } from './CollectionList';

export const CollectionListSection = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles['section-title']}>
                <span>Las mejores colecciones sobre</span>
                <span className={styles['section-title-days']}> los últimos 7 días</span>
            </h2>
            <CollectionList />
        </section>
    )
}