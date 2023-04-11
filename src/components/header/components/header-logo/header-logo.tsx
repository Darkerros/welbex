import {Logo} from "../../../logo/logo";
import styles from './header-logo.module.scss'

export const HeaderLogo = () => {
    return (
        <div className={styles.headerLogo}>
            <Logo/>
            <p className={styles.headerLogo__description}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
    );
};

