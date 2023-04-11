import styles from './footer.module.scss';
import {FooterNav} from "../footer-nav/footer-nav";
import {FooterContact} from "../footer-contact/footer-contact";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <FooterNav/>
            <FooterContact/>
        </footer>
    );
};
