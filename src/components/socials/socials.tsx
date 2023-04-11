import styles from "./socials.module.scss"
import {TelegramIcon} from "../../ui/icons/socials/telegram-icon";
import {ViberIcon} from "../../ui/icons/socials/viber-icon";
import {WhatsappIcon} from "../../ui/icons/socials/whatsapp-icon";
import {FC} from "react";

interface SocialsProps {
    extraClass?: string;
}

export const Socials:FC<SocialsProps> = ({extraClass}) => {
    return (
        <div className={extraClass ? `${styles.socials} ${extraClass}` : styles.socials}>
            <a href="#"><TelegramIcon/></a>
            <a href="#"><ViberIcon/></a>
            <a href="#"><WhatsappIcon/></a>
        </div>
    );
};
