import styles from "./logo.module.scss";
import logo from './svg/logo.svg';

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <svg className={styles.svg} viewBox="0 0 1600 1392" width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                <use href={`${logo}#svg-logo-my-password`}/>
            </svg>
            <div className={styles.title}>MyPassword</div>
        </div>
    )
}