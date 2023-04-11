import styles from './footer-contact.module.scss';
import {Socials} from "../../../socials/socials";
import {FooterConfidential} from "../footer-confidential/footer-confidential";

export const FooterContact = () => {
    return (
        <div className={styles.footerContact}>
            <p className={styles.footerContact__title}>Контакты</p>
            <a className={styles.footerContact__tel} href="tel:+7 555 555-55-55">+7 555 555-55-55</a>
            <Socials extraClass={styles.footerContact__socials}/>
            <p className={styles.footerContact__adress}>Москва, Путевой проезд 3с1, к 902</p>
            <FooterConfidential/>
        </div>
    );
};
