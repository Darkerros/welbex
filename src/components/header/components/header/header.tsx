import styles from "./header.module.scss"
import {HeaderLogo} from "../header-logo/header-logo";
import {HeaderImportant} from "../header-important/header-important";
import {HeaderSocials} from "../header-socials/header-socials";

export const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderLogo/>
            <HeaderImportant/>
            <HeaderSocials/>
        </header>
    );
};
