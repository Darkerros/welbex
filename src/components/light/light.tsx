import styles from './light.module.scss';
import {FC} from "react";

interface LightProps {
    extraClass: string;
}

export const Light:FC<LightProps> = ({extraClass}) => {
    return (
        <span className={`${styles.light} ${extraClass}`}/>
    );
};
