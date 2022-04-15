import classNames from "classnames";
import styles from './tab.module.scss';

export const Tab = ({ children, active, handleClick, index }) => {
    return (
        <li className={styles.tab} onClick={() => handleClick(index)}>
            <div className={classNames(active ? styles.active : '')}>
                {children}
            </div>
            <div className={classNames(styles.marker, active ? styles.active : '')}></div>
        </li>
    )
}