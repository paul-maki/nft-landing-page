import styles from './buy-collection-filter-card.module.scss';
import { MdClose } from 'react-icons/md';

export const BuyCollectionFilterCard = ({children, handleRemoveOption}) => {
    return(
        <div className={styles.card} onClick={() => handleRemoveOption(children)}>
            {children}
            <MdClose size="24px" color='gray' />
        </div>
    )
}