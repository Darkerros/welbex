import styles from "./header-socials.module.scss"
import {Socials} from "../../../socials/socials";
import {useMatchMedia} from "../../../../hooks/use-match-media";

export const HeaderSocials = () => {
    const isNeedHide = useMatchMedia("(max-width: 925px)")

    if (isNeedHide) return null

    return (
        <div className={styles.headerSocials}>
            <a className={styles.headerSocials__tel} href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
            <Socials />
        </div>
    );
};
