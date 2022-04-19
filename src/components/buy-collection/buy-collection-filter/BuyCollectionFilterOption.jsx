import styles from './buy-collection-filter.module.scss';

export const BuyCollectionFilterOption = ({handleSelectedOption, option, quantity}) => {
    return (
        <div key={option} className={styles['option-container']} >
            <label className={styles.option} onClick={() => handleSelectedOption(option)}>
                <input className={styles.checkbox} type="checkbox" />
                <span onClick={e => e.stopPropagation()} className={styles.optionText}>{option}</span>
                <span onClick={e => e.stopPropagation()} className={styles.quantity}>{quantity}</span>
            </label>
        </div>
    )
}