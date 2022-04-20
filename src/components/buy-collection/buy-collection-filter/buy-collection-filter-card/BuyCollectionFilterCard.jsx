import styles from './buy-collection-filter-card.module.scss';
import { MdClose } from 'react-icons/md';

export const BuyCollectionFilterCard = ({children}) => {
    return(
        <div className={styles.card}>
            {children}
            <MdClose size="24px" color='gray' />
        </div>
    )
}