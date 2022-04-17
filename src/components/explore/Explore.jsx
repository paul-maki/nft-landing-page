import { Link } from "react-router-dom";
import { Button } from "../common/button/Button";
import styles from './explore.module.scss';

export const Explore = ({title, subtitle, buttonText, buttonSecondaryText}) => {
    return(
        <div className={styles.explore}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subtitle}>{subtitle}</h2>
            <Link className={styles.link} to="/explore">
                <Button className={styles.button} color="primary">
                    {buttonText}
                </Button>
                <Button className={styles.button} color="secondary">
                    {buttonSecondaryText}
                </Button>
            </Link>
        </div>
    )
}