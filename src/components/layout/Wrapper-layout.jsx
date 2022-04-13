import styles from './wrapper-layout.module.scss';

export const WrapperLayout = ({children}) => {
    return (
        <div className={styles['wrapper-layout']}>
            {children}
        </div>
    )
}