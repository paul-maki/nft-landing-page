import classNames from 'classnames';
import styles from './button.module.scss';

export const Button = ({children, className, color}) => {
    return(
        <button className={classNames(className, styles.button, color ? styles[`button-${color}`] : '' )}>{children}</button>
    )
}