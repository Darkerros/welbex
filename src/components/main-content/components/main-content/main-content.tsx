import styles from './main-content.module.scss';
import {MainContentBaseInfo} from "../main-content-base-info/main-content-base-info";
import {MainContentExternalInfo} from "../main-content-external-info/main-content-external-info";

export const MainContent = () => {
    return (
        <section className={styles.mainContent}>
            <div className={styles.mainContent__content}>
                <MainContentBaseInfo/>
                <MainContentExternalInfo/>
            </div>
            <a className={styles.mainContent__contact} href="tel:+7 555 555-55-55">Получить консультацию</a>
        </section>
    );
};
