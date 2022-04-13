import styles from './collection.module.scss';
import { CollectionList } from './CollectionList';

export const CollectionListSection = () => {
    return (
        <section className={styles.section}>
            <h1>Las mejores colecciones sobre Los últimos 7 días</h1>
            <CollectionList />
        </section>
    )
}