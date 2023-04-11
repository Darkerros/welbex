import {FC, ReactNode} from 'react';
import styles from './footer-nav-column.module.scss'

interface FooterNavColumnProps {
    title: string;
    extraClass?: string;
    extraDataContainerClass?: string;
    children: ReactNode;
}

export const FooterNavColumn:FC<FooterNavColumnProps> = ({extraClass, title, children, extraDataContainerClass}) => {
    return (
        <div className={extraClass}>
            <p className={styles.footerNavColumn__title}>{title}</p>
            <ul className={extraDataContainerClass ? `${styles.footerNavColumn__dataContainer} ${extraDataContainerClass}` : styles.footerNavColumn__dataContainer}>
                {children}
            </ul>
        </div>
    );
};
