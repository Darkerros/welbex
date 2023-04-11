import {Logo} from "../../../logo/logo";
import styles from './header-logo.module.scss'
import {useMatchMedia} from "../../../../hooks/use-match-media";

export const HeaderLogo = () => {
    const isNeedHide = useMatchMedia("(max-width: 750px)")

    if (isNeedHide) return null

    return (
        <div className={styles.headerLogo}>
            <Logo/>
            <p className={styles.headerLogo__description}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
        </div>
    );
};

