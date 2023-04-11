import styles from './header-important.module.scss';

export const HeaderImportant = () => {
    return (
        <nav className={styles.headerImportant}>
            <a className={styles.headerImportant__link} href="#">Услуги</a>
            <a className={styles.headerImportant__link} href="#">Виджеты</a>
            <a className={styles.headerImportant__link} href="#">Интеграции</a>
            <a className={styles.headerImportant__link} href="#">Кейсы</a>
            <a className={styles.headerImportant__link} href="#">Сертификаты</a>
        </nav>
    );
};
