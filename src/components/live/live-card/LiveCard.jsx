import classNames from 'classnames';
import { Button } from '../../common/button/Button';
import styles from './live-card.module.scss';
export const LiveCard = ({color, img, title, subtitle = "en el primer y más grande mercado de NFT del mundo", buttonText= "Live"}) => {
    return(
        <div className={styles['live-card-container']}>
            <img alt={title} className={styles.img} height="auto" width="100%" src={img} />
            <div className={classNames(styles['live-card-info'], styles[`${color}`])}>
                <span className={styles.title}>{title}</span>
                <span className={styles.subtitle}>{subtitle}</span>
                <Button color="transparent">{buttonText}</Button>
            </div>
        </div>
    )
}