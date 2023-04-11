import styles from './main-content-external-info.module.scss';
import {MainContentExternalInfoGroup} from "../main-content-external-info-group/main-content-external-info-group";

export const MainContentExternalInfo = () => {
    return (
        <div className={styles.mainContentExternalInfo}>
            <h3 className={styles.mainContentExternalInfo__title}>
                Вместе с <i className={styles.mainContentExternalInfo__title_extra}>БЕСПЛАТНОЙ</i> <i className={styles.mainContentExternalInfo__title_extra}>КОНСУЛЬТАЦИЕЙ</i> мы дарим:
            </h3>
            <MainContentExternalInfoGroup/>
        </div>
    );
};
