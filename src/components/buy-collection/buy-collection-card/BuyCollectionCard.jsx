import styles from './buy-collection-card.module.scss';
import ethereum from '../../../images/common/ethereum-icon.png';
import { FaRegHeart } from 'react-icons/fa';

export const BuyCollectionCard = ({img, title, number, value, oldValue, favs}) => {
    return (
        <div className={styles.card}>
            <img alt={title} width="100%" height="auto" src={img}/>
            <div className={styles.info}>
                <div className={styles['title-container']}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.number}>#{number}</span>
                </div>
                <div className={styles['price-container']}>
                    <span className={styles.price}>Price</span>
                    <div className={styles['value-container']}>
                        <img alt="ethereum" src={ethereum} />
                        <span className={styles.value}>{value}</span>
                    </div>
                    <div className={styles['last-container']}>
                        <span>Last </span>
                        <img alt="ethereum" src={ethereum} />
                        <span className={styles['old-value']}>{oldValue}</span>
                    </div>
                    <div>
                        <FaRegHeart />
                        <span className={styles.favs}>{favs}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}