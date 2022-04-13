import { Button } from "../common/button/Button";
import styles from './explore.module.scss';

export const Explore = ({title, subtitle, buttonText}) => {
    return(
        <div className={styles.explore}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <Button color="primary">{buttonText}</Button>
        </div>
    )
}