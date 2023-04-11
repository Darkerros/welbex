import styles from './footer-nav.module.scss'
import {FooterNavColumn} from "../footer-nav-column/footer-nav-column";
import {FooterNavColumnItem} from "../footer-nav-column-item/footer-nav-column-item";

export const FooterNav = () => {
    return (
        <div className={styles.footerNav}>
            <FooterNavColumn title="О компании">
                <FooterNavColumnItem href="#">Партнёрская программа</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Вакансии</FooterNavColumnItem>
            </FooterNavColumn>
            <FooterNavColumn title="Меню" extraDataContainerClass={styles.footerNav__menu}>
                <FooterNavColumnItem href="#">Расчёт стоимости</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Кейсы</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Услуги</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Благодарственные письма</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Виджеты</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Сертификаты</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Интеграции</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Блог на Youtube</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Наши клиенты</FooterNavColumnItem>
                <FooterNavColumnItem href="#">Вопрос / Ответ</FooterNavColumnItem>
            </FooterNavColumn>
        </div>
    );
};
