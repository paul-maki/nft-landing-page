import styles from './buy-collection-filter.module.scss';

export const BuyCollectionFilterOption = ({handleSelectedOption, option, quantity, checked}) => {
    console.log(checked)
    return (
        <div key={option} className={styles['option-container']} >
            <label className={styles.option} onClick={() => handleSelectedOption(option)} onChange={() => {}}>
                <input className={styles.checkbox} type="checkbox" checked={checked} />
                <span onClick={e => e.stopPropagation()} className={styles.optionText}>{option}</span>
                <span onClick={e => e.stopPropagation()} className={styles.quantity}>{quantity}</span>
            </label>
        </div>
    )
}