import { BuyCollectionList } from "./BuyCollectionList";
import styles from './buy-collection-list.module.scss';
import { BuyCollectionFilterCard } from "../buy-collection-filter/buy-collection-filter-card/BuyCollectionFilterCard";

export const BuyCollectionListContainer = ({collectionList, selectedOptions, handleSelectedOption}) => {
    return(
        <div className={styles.container}>
            <div className={styles['selected-options-card-container']}>
                {selectedOptions && selectedOptions.map(option => {
                    return <BuyCollectionFilterCard key={option} handleRemoveOption={handleSelectedOption}>{option}</BuyCollectionFilterCard>
                })}
            </div>
            <BuyCollectionList collectionList={collectionList} />
        </div>
    )
}