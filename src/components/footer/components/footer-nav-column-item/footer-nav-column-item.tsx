import styles from './footer-nav-column-item.module.scss';
import {FC} from "react";

interface FooterNavColumnItemProps {
    children: string;
    href: string;
}

export const FooterNavColumnItem:FC<FooterNavColumnItemProps> = ({children, href}) => {
    return (
        <li className={styles.footerNavColumnItem}>
            <a className={styles.footerNavColumnItem__link} href={href}>{children}</a>
        </li>
    );
};
