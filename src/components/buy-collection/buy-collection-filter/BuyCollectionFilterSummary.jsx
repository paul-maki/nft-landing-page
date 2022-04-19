import styles from './buy-collection-filter.module.scss';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

export const BuyCollectionFilterSummary = ({icon, title, open, handleFilterOpen, totalFilters = 0, totalOptions}) => {
    return (
        <summary onClick={handleFilterOpen} className={styles.summary}>
            {icon && icon}
            <span>{title}</span>
            {totalFilters !== 0  && <span>{`(${totalFilters})`}</span>}
            {totalOptions && <span className={styles['total-options']}>{totalOptions}</span>}
            {open ? <BiChevronUp /> : <BiChevronDown />}
        </summary>
    )
}