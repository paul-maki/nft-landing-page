import styles from './collection.module.scss';
import ethereum from '../../images/common/ethereum-icon.png'

export const CollectionListItem = ({img, position, title, price = "15,743.38", percentage = "+39.05%"}) => {
    return(
        <div className={styles['collection-list-item']} key={position}>
            <div className={styles['collection-list-item-data']}>
                <span className={styles.position}>{position}</span>
                <img alt={title} src={img} height="56" width="56" />
                <div className={styles['title-price-container']}>
                    <span className={styles.title}>{title}</span>
                    <div className={styles['price-container']}>
                        <img alt="ethereum" src={ethereum} />
                        <span className={styles.price}>{price}</span>
                    </div>
                </div>
                <span className={styles.percentage}>{percentage}</span>
            </div>
        </div>
    )
}