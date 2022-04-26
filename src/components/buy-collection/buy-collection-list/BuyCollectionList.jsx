import { BuyCollectionCard } from "../buy-collection-card/BuyCollectionCard";
import styles from './buy-collection-list.module.scss';

export const BuyCollectionList = ({collectionList}) => {
    return(        
        <div className={styles['buy-collection-list']}>
        <span className={styles.results}>{collectionList.length} results</span>
            {collectionList.map((card, index) => {
                return (
                    <BuyCollectionCard key={index} {...card} />
                )
            })}
        </div>
    )
}