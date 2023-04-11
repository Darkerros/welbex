import {FC} from 'react';
import styles from "./main-content-external-info-group-card.module.scss"

interface MainContentExternalInfoGroupCardProps {
    title: string;

    children: string;
}

export const MainContentExternalInfoGroupCard:FC<MainContentExternalInfoGroupCardProps> = ({title, children}) => {
    return (
        <div className={styles.mainContentExternalInfoGroupCard}>
            <p className={styles.mainContentExternalInfoGroupCard__title}>{title}</p>
            <p className={styles.mainContentExternalInfoGroupCard__content}>{children}</p>
        </div>
    );
};
