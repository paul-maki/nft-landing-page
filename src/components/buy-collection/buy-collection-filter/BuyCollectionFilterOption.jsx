import styles from './buy-collection-filter.module.scss';

export const BuyCollectionFilterOption = ({handleSelectedOption, option, quantity, checked}) => {
    return (
        <div key={option} className={styles['option-container']} >
            <label className={styles.option}>
                <div>
                    <input className={styles.checkbox} type="checkbox" checked={checked} onChange={() => handleSelectedOption(option)}/>
                    <span onClick={e => e.stopPropagation()} className={styles.optionText}>{option}</span>
                </div>
                <span onClick={e => e.stopPropagation()} className={styles.quantity}>{quantity}</span>
            </label>
        </div>
    )
}