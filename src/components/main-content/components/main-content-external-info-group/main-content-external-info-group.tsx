import styles from './main-content-external-info-group.module.scss';
import {
    MainContentExternalInfoGroupCard
} from "../main-content-external-info-group-card/main-content-external-info-group-card";

export const MainContentExternalInfoGroup = () => {
    return (
        <div className={styles.mainContentExternalInfoGroup}>
            <MainContentExternalInfoGroupCard title="Виджеты">30 готовых решений</MainContentExternalInfoGroupCard>
            <MainContentExternalInfoGroupCard title="Dashboard">с показателями вашего бизнеса</MainContentExternalInfoGroupCard>
            <MainContentExternalInfoGroupCard title="Skype Аудит">отдела продаж и CRM системы</MainContentExternalInfoGroupCard>
            <MainContentExternalInfoGroupCard title="35 дней">использования CRM</MainContentExternalInfoGroupCard>
        </div>
    );
};
