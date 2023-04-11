import styles from './footer-confidential.module.scss';

export const FooterConfidential = () => {
    return (
        <div className={styles.footerConfidential}>
            <p className={styles.footerConfidential__text}>©WELBEX 2022. Все права защищены.</p>
            <a className={styles.footerConfidential__link} href="#">Политика конфиденциальности</a>
        </div>
    );
};
