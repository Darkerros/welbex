import {FC} from 'react';
import {IconsBaseProps} from "../icons-base-props-interface";

export const TelegramIcon:FC<IconsBaseProps> = ({classname}) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={classname}>
            <path d="M17.2208 3.09753L2.44582 8.79503C1.43748 9.20003 1.44332 9.76253 2.26082 10.0134L6.05415 11.1967L14.8308 5.6592C15.2458 5.4067 15.625 5.54253 15.3133 5.8192L8.20248 12.2367H8.20082L8.20248 12.2375L7.94082 16.1475C8.32415 16.1475 8.49332 15.9717 8.70831 15.7642L10.5508 13.9725L14.3833 16.8034C15.09 17.1925 15.5975 16.9925 15.7733 16.1492L18.2892 4.29253C18.5466 3.26003 17.895 2.79253 17.2208 3.09753Z" fill="#E4E5EA"/>
        </svg>
    );
};
