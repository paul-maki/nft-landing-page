import styles from './header.module.scss';

export const Header = ({children}) => {
    return(
        <header className={styles.header}>{children}</header>
    )
}