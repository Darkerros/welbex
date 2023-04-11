import styles from './main-content-base-info.module.scss';

export const MainContentBaseInfo = () => {
    return (
        <div className={styles.mainContentBaseInfo}>
            <h1 className={styles.mainContentBaseInfo__title}>Зарабатывайте больше</h1>
            <h2 className={styles.mainContentBaseInfo__titleBrandName}>с WELBEX</h2>
            <p className={styles.mainContentBaseInfo__subtitle}>Развиваем и контролируем продажи за вас</p>
        </div>
    );
};
