import logo from "../../images/logo.png"
import styles from './logo.module.scss'

export const Logo = () => {
    return (
        <img className={styles.logo} src={logo} alt="логотип компании Welbex"/>
    );
};
